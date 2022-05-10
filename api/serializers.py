from dataclasses import fields
from pyexpat import model
from rest_framework import serializers

from fulalapp import models
from fulalapp.models import StudentRegistrationDetails
from fulalapp.models import StudentPadCollectionDetails
from fulalapp.models import JoinStudentPadTable


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

        # fields = ('regno', 'first_name', 'last_name', 'school_name', 'collection_date', 'last_collected', 'served_by')
