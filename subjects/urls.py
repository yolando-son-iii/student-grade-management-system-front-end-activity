from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SubjectViewSet, StudentViewSet

router = DefaultRouter()
router.register(r'subjects', SubjectViewSet)
router.register(r'students', StudentViewSet) 

urlpatterns = [
    path('', include(router.urls)),
]