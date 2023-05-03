from webbrowser import get
from django.db import router
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView
from accounts.models import User



router = DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True))),
    path("graphql", GraphQLView.as_view(graphiql=True, schema=User)),


]
