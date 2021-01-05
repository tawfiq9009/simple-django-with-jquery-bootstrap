"""books URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static

from book_list.urls import router as book_router
from book_list.views import index, add

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include((book_router.urls, 'book-api'))),
    path('', index, name='index'),
    path('add/', add, name='add'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
