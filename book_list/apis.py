from rest_framework import mixins, viewsets

from book_list.models import Book
from book_list.serializers import BookSerializer


class BookAPI(mixins.CreateModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Book.objects.all().order_by('-id')
    serializer_class = BookSerializer
