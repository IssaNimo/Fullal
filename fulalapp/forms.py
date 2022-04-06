# from django import forms
# from django.forms import ModelForm
# from .models import StudentRegistrationDetails

# class DateInput(forms.DateInput):
#     input_type = 'date'

# class StudentRegistationDetailsForm(forms.ModelForm):
#     """A form for adding new student details and their menstrual period data."""

#     dob = forms.DateField(widget=DateInput)
#     dom = forms.DateField(widget=DateInput)

#     class Meta:
#         model = StudentRegistrationDetails
#         fields = ('regno', 'first_name', 'last_name', 'dob', 'school_name', 'grade', 'dom', 'photoid', 'parent_name', 'phoneno')

#         def clean_regno(self): #validates the Registration Number field
#             regno = self.cleaned_data.get['regno']
#             if (regno == ""):
#                 raise forms.ValidationError('This field cannot be left blank')
#             for instance in StudentRegistrationDetails.objects.all():
#                 if instance.regno == regno:
#                     raise forms.ValidationError('Registration Number' + regno + 'Exists' )
#             return regno


#         def clean_phoneno(self): #validates the Phone Number field
#             phoneno = self.cleaned_data.get['phoneno']
#             if (regno == ""):
#                 raise forms.ValidationError('This field cannot be left blank')
#             for instance in StudentRegistrationDetails.objects.all():
#                 if instance.phoneno == phoneno:
#                     raise forms.ValidationError('Phone Number' + phoneno + 'Exists' )
#             return regno
