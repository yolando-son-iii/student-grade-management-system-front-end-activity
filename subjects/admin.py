from django.contrib import admin
from .models import Subject, Student

@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    list_display = ['name', 'code', 'created_at']
    search_fields = ['name', 'code']
    list_filter = ['created_at']

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'student_id', 'email', 'created_at']
    search_fields = ['first_name', 'last_name', 'student_id', 'email']
    list_filter = ['created_at']