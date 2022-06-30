from django.contrib import admin
from fulalapp import models
from .models import StudentRegistrationDetails, StudentPadCollectionDetails, user

# Register your models here.
@admin.register(StudentRegistrationDetails)
class StudentRegistrationDetailsModelAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'dob', 'county', 'constituency',
    'school_name','grade','dom','photoid', 'status', 'created')
    
@admin.register(StudentPadCollectionDetails)
class StudentPadCollectionDetailsModelAdmin(admin.ModelAdmin):
    prepoulated_fields = {'regno':(' regno',),}



@admin.register(user)
class userModelAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'password')
