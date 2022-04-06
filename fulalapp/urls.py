from django.urls import path
from fulalapp import views
from fulalapp.views import *

app_name = 'fulalapp'

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('about/', views.aboutpage, name='aboutpage'),
    path('add_student/', views.addstudent, name='add_student'),
    path('edit_student/<int:id>', views.editstudent, name='edit_student'),
    path('edit_student/update/<int:id>', views.updatestudent, name='update_student'),
    path('delete_student/<int:id>', views.deletestudent, name='delete_student'),
    path('student_details/', views.studentdetails, name='studentdetails'),
]
