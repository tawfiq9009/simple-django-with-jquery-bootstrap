from django.db import models
from django.core.validators import MinValueValidator


class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    num_of_pages = models.IntegerField(default=1, validators=[MinValueValidator(1)])
    author_email = models.EmailField()
