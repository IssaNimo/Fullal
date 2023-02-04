from webbrowser import get
from django.db import router
from django.urls import path, include
from api import views
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users',Userapi, basename='users' ),

urlpatterns = [
    path('', include(router.urls)),
]
