from django.contrib import admin
from fulalapp import models
from .models import StudentRegistrationDetails, StudentPadCollectionDetails, JoinStudentPadTable, user

# Register your models here.
@admin.register(StudentRegistrationDetails)
class StudentRegistrationDetailsModelAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'dob', 'county', 'constituency',
    'school_name','grade','dom','photoid', 'status', 'created')
    
@admin.register(StudentPadCollectionDetails)
class StudentPadCollectionDetailsModelAdmin(admin.ModelAdmin):
    prepoulated_fields = {'regno':(' regno',),}


@admin.register(JoinStudentPadTable)
class JoinStudentPadTableModelAdmin(admin.ModelAdmin):
    list_display = ('regno','first_name', 'last_name','school_name','collection_date','last_collected','served_by')
    prepoulated_fields = {'regno':(' regno',),}

@admin.register(user)
class userModelAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'password')
