from webbrowser import get
from django.db import router
from django.urls import path, include
from api import views
from .views import *

app_name = "api"

urlpatterns = [
    #student list api
    path('', views.apiOverview, name='apiOverview'),
    #Student List  API
    path('student-list/', views.showAll, name = 'student-list'),
    #Student Detail API
    path('student-detail/<int:pk>/', views.viewStudent, name = 'student-detail'),
    #Student Create API
    path('student-create/', views.addStudent, name = 'student-create'),
    #student Update
    path('student-update/<int:pk>/', views.updateStudent, name = 'student-update'),
    #Student Delete Api
    path('student-delete/<int:pk>/', views.deleteStudent, name = 'student-delete'),
    # pad collection list
    path('padcollection-list/', views.showPadCollectionList, name = 'padcollection-list'),
    #padcollection Create API
    path('padcollection-create/', views.addpadcollectiondetails, name = 'padcollection-create'),
    # pad collection list join
    path('padcollectionjoin-list/', views.jointtable.as_view({'get':'list'}), name='padcollectionjoin-list'),
    # pad collection join Detail
    path('padcollectionjoin-detail/<regno>/', views.jointtable.as_view({'get':'retrieve'}), name='padcollectionjoin-detail')

]
