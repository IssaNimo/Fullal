from datetime import date
import email
from pyexpat import model
from tabnanny import verbose
from webbrowser import get
from django.db import models
from django.utils import timezone

def user_directory_path(instance, filename):
    return 'img/{0}'.format(filename)

# Create your models here.
class StudentRegistrationDetails(models.Model):

    student_status = (
        ('present', 'Present'),
        ('absent', 'Absent'),
    )

    #student details
    regno =  models.CharField(max_length=50, verbose_name = 'Student Registrartion Number')
    first_name = models.CharField(max_length=30, blank = True, verbose_name = 'First Name')
    last_name = models.CharField(max_length=30, blank = True, verbose_name = 'Last Name')
    dob = models.DateField(verbose_name = 'Date Of Birth')
    county = models.CharField(max_length=30, blank = True, verbose_name = 'County')
    constituency = models.CharField(max_length=30, blank = True, verbose_name = 'Constituency')
    school_name = models.CharField(max_length=30, blank = True, verbose_name = 'School Name')
    grade = models.CharField(max_length=10, blank = True, verbose_name = 'Class/Grade')
    dom = models.DateField(verbose_name = 'Date Of Menstruation')
    photoid = models.ImageField(null = True, blank = True)
    location = models.CharField(max_length=30, verbose_name='Location')
    sub_location = models.CharField(max_length=30, verbose_name='Sub Location')
    village = models.CharField(max_length=30, verbose_name='Village')
    area_chief = models.CharField(max_length=30, verbose_name='Area chief')
    chief_phoneno = models.CharField(max_length=30, verbose_name='Chief Phone Number')
    mothers_name = models.CharField(max_length=30, verbose_name='Mothers Name')
    fathers_name = models.CharField(max_length=30, verbose_name='Fathers Name')
    phone_number = models.CharField(max_length=30, verbose_name='Phone Number')
    status = models.CharField(max_length=11, choices=student_status, default='present')
    created = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return str(self.regno)

    class Meta:
        verbose_name_plural = "Student Registration Details"

class StudentPadCollectionDetails(models.Model):
    
    collection_date = models.DateField(default=date.today, verbose_name='Collection Date')
    served_by = models.CharField(max_length=30, verbose_name='Served BY')
    regno = models.ForeignKey("StudentRegistrationDetails", related_name='pad_collection' , verbose_name=("Student ID"), on_delete=models.CASCADE)
    pads_collected = models.CharField(max_length=30, verbose_name='Number of Pads Collected')


    def _str_(self):
        return str(self.regno)

    class Meta:
        verbose_name_plural = 'Student Pad Collection Details'    


class user(models.Model):
    username = models.CharField(max_length=255, null=False)
    email = models.EmailField(max_length=255, null=False)
    password = models.CharField(max_length=50)
    iflogged = models.BooleanField(default=False)
    token = models.CharField(max_length=500, null=True, default="")

    def __str__(self):
        return "{} -{}".format(self.username, self.email)


class subcounty(models.Model):
    subcounty_name = models.CharField(max_length=255, null=False)
    # regno = models.ForeignKey("StudentRegistrationDetails", related_name='sub_county', verbose_name=("student ID"), on_delete=models.CASCADE)


    def _str_(self):
        return str(self.regno)

    class Meta:
        verbose_name_plural = 'sub county'