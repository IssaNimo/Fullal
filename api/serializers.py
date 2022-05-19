from asyncio import Queue
from dataclasses import fields
from pyexpat import model
import queue
from uuid import uuid4
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.core.exceptions import ValidationError


from fulalapp import models
from fulalapp.models import StudentRegistrationDetails
from fulalapp.models import StudentPadCollectionDetails
from fulalapp.models import JoinStudentPadTable
from fulalapp.models import user


class StudentPadCollectionDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentPadCollectionDetails
        fields = '__all__'


class StudentRegistrationDetailsSerializer(serializers.ModelSerializer):
    pad_collection = StudentPadCollectionDetailsSerializer(read_only = True, many=True)
    padcollection = StudentPadCollectionDetailsSerializer(read_only = True, many=True)

    class Meta:
        model = StudentRegistrationDetails
        fields = '__all__'

class JoinStudentPadTableSerializer(serializers.ModelSerializer):
    padcollection = StudentPadCollectionDetailsSerializer(read_only = True, many=True)
    class Meta:
        model = JoinStudentPadTable
        fields = '__all__'
        # depth = 2

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=user.objects.all())]
        )
    username = serializers.CharField(
        required=True,
        validators=[UniqueValidator(queryset=user.objects.all())]
        )
    password = serializers.CharField(max_length=8)

    class Meta:
        model = user
        fields = (
            'username',
            'email',
            'password'
        )

class UserLoginSerializer(serializers.ModelSerializer):
    # to accept either username or email
    user_id = serializers.CharField()
    password = serializers.CharField()
    token = serializers.CharField(required=False, read_only=True)

    def validate(self, data):
        # user,email,password validator
        user_id = data.get("user_id", None)
        password = data.get("password", None)
        if not user_id and not password:
            raise ValidationError("Details not entered.")
        user = None
        # if the email has been passed
        if '@' in user_id:
            user = user.objects.filter(
                Queue(email=user_id) &
                queue(password=password)
                ).distinct()
            if not user.exists():
                raise ValidationError("User credentials are not correct.")
            user = user.objects.get(email=user_id)
        else:
            user = user.objects.filter(
                Q(username=user_id) &
                Q(password=password)
            ).distinct()
            if not user.exists():
                raise ValidationError("User credentials are not correct.")
            user = user.objects.get(username=user_id)
        if user.ifLogged:
            raise ValidationError("User already logged in.")
        user.ifLogged = True
        data['token'] = uuid4()
        user.token = data['token']
        user.save()
        return data

    class Meta:
        model = user
        fields = (
            'user_id',
            'password',
            'token',
        )


class UserLogoutSerializer(serializers.ModelSerializer):
    token = serializers.CharField()
    status = serializers.CharField(required=False, read_only=True)

    def validate(self, data):
        token = data.get("token", None)
        print(token)
        user = None
        try:
            user = user.objects.get(token=token)
            if not user.ifLogged:
                raise ValidationError("User is not logged in.")
        except Exception as e:
            raise ValidationError(str(e))
        user.ifLogged = False
        user.token = ""
        user.save()
        data['status'] = "User is logged out."
        return data

    class Meta:
        model = user
        fields = (
            'token',
            'status',
        )