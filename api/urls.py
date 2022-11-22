from webbrowser import get
from django.db import router
from django.urls import path, include
from api import views
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('students',Studentapi, basename='students' ),
router.register('padcollection',padapi, basename='padcollection' ),
router.register('subcounty', subcountyapi,basename='subcounty'),

urlpatterns = [
    path('', include(router.urls)),
]
