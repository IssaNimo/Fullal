
from codecs import lookup
from urllib import response
from django.shortcuts import get_object_or_404
from rest_framework import generics
from api.custom_renderers import JPEGRenderer, PNGRenderer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework import viewsets
from django.http import Http404, JsonResponse




from .serializers import StudentPadCollectionDetailsSerializer, StudentRegistrationDetailsSerializer, JoinStudentPadTableSerializer
from fulalapp import models
from fulalapp.models import StudentPadCollectionDetails, StudentRegistrationDetails, JoinStudentPadTable

from api import serializers

class Studentapi(viewsets.ModelViewSet):
    queryset = StudentRegistrationDetails.objects.all()
    serializer_class = StudentRegistrationDetailsSerializer

    def get_queryset(self):
        students = StudentRegistrationDetails.objects.all()
        return students

class padapi(viewsets.ModelViewSet):
    queryset = StudentPadCollectionDetails.objects.all()
    serializer_class = StudentPadCollectionDetailsSerializer

    def get_queryset(self):
        padcollection = StudentPadCollectionDetails.objects.all()
        return padcollection
class jointtableapi(viewsets.ReadOnlyModelViewSet):
    queryset = JoinStudentPadTable.objects.raw('SELECT fulalapp_studentregistrationdetails.id,  regno_id, first_name, last_name, school_name,collection_date, last_collected, served_by, pads_collected  FROM fulalapp_studentregistrationdetails INNER JOIN fulalapp_studentpadcollectiondetails ON  fulalapp_studentregistrationdetails.id = fulalapp_studentpadcollectiondetails.regno_id')
    serializer_class = JoinStudentPadTableSerializer
    lookup_field = 'regno_id'


    