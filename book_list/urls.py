from django.urls import path
from rest_framework import routers

from .apis import BookAPI

router = routers.DefaultRouter()

router.register(r'book', BookAPI, basename='book')
