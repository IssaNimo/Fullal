
from django.shortcuts import get_object_or_404
from rest_framework import generics
from api.custom_renderers import JPEGRenderer, PNGRenderer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework import viewsets
from django.http import Http404




from .serializers import StudentPadCollectionDetailsSerializer, StudentRegistrationDetailsSerializer, JoinStudentPadTableSerializer
from fulalapp import models
from fulalapp.models import StudentPadCollectionDetails, StudentRegistrationDetails, JoinStudentPadTable

class StudentAPIView(generics.RetrieveAPIView):

    def get(self, request, *args, **kwargs):
        renderer_classes = [JPEGRenderer]
        queryset = StudentRegistrationDetails.object.get(id=self.kwargs['id']).photoid
        data = queryset
        return Response(data, content_type='img/jpg')


# Create your views here.
@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List': '/student-list/',
        'Detail View': '/student-detail/<int:id>/',
        'Create': '/student-create/',
        'Update': '/student-update/<int:id>/',
        'Delete': '/student-delete/<int:id>/',
    }
    return Response(api_urls)

@api_view(['GET'])
def showAll(request):
    students = StudentRegistrationDetails.objects.all()
    serializer = StudentRegistrationDetailsSerializer(students, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def viewStudent(request, pk):
    student = StudentRegistrationDetails.objects.get(pk=pk)
    serializer = StudentRegistrationDetailsSerializer(student, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def addStudent(request):
    serializer = StudentRegistrationDetailsSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def updateStudent(request, pk):
   
    students = StudentRegistrationDetails.objects.get(id=pk)

    serializer = StudentRegistrationDetailsSerializer(instance=students, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)    


@api_view(['DELETE'])
def deleteStudent(request, pk):
   
    students = StudentRegistrationDetails.objects.get(id=pk)
    serializer = StudentRegistrationDetailsSerializer(instance=students, data=request.data)

    students.delete()
    if serializer.is_valid():
        serializer.delete()
    return Response(serializer.data) 

class PadcollectionAPIView(generics.RetrieveAPIView):

    # pad collection api

    @api_view(['GET'])
    def apiOverview(request):
        api_urls = {
        'List': '/padcollection-list/',
        'Detail View': '/padcollection-detail/<int:id>/',
        'Create': '/Padcollection-create/',   
    }
        return Response(api_urls)


@api_view(['GET'])
def showPadCollectionList(request):
    padcollection = StudentPadCollectionDetails.objects.all()
    serializer = StudentPadCollectionDetailsSerializer(padcollection, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def addpadcollectiondetails(request):
    serializer = StudentPadCollectionDetailsSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def viewPadCollection(request, pk):
    padcollection = StudentPadCollectionDetails.objects.get(Pid=pk)
    serializer = StudentPadCollectionDetailsSerializer(padcollection, many=False)
    return Response(serializer.data)


class jointtable(viewsets.ModelViewSet):
    queryset = JoinStudentPadTable.objects.raw('SELECT  regno, first_name, last_name, school_name,collection_date, last_collected, served_by  FROM fulalapp_studentregistrationdetails INNER JOIN fulalapp_studentpadcollectiondetails ON  fulalapp_studentregistrationdetails.id = fulalapp_studentpadcollectiondetails.regno_id')
    serializer_class = JoinStudentPadTableSerializer
    lookup_field = 'regno'
    

