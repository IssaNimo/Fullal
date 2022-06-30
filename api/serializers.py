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
from fulalapp.models import user


class StudentPadCollectionDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentPadCollectionDetails
        fields = '__all__'


class StudentRegistrationDetailsSerializer(serializers.ModelSerializer):
    pad_collection = StudentPadCollectionDetailsSerializer(read_only = True, many=True)

    class Meta:
        model = StudentRegistrationDetails
        fields = '__all__'




