from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse, NoReverseMatch
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import cache_control
# from .forms import StudentRegistationDetailsForm
from .models import StudentRegistrationDetails

app_name='fulalapp'

# Create your views here.
@csrf_exempt
#@login_required()
@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def homepage(request):
    return render(request, "fulalapp/index.html")

@csrf_exempt
#@login_required()
@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def aboutpage(request):
    return render(request, "fulalapp/about.html")

@csrf_exempt
@login_required()
@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def studentdetails(request):
    studentdetails = StudentRegistrationDetails.objects.all()
    return render(request, "fulalapp/studentdetails.html", {"studentdetails": studentdetails})

@csrf_exempt
@login_required()
@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def addstudent(request):
    form = StudentRegistationDetailsForm(request.POST, request.FILES)

    if request.method == "POST":
        form = StudentRegistationDetailsForm(request.POST, request.FILES)
        if form.is_valid():
            messages.info(request, 'New Student Added Successfuly')
            form.save()
            return redirect('fulalapp:studentdetails')
    else:
        form = StudentRegistationDetailsForm()
    context = {'form': form}
    return render(request, "fulalapp/studentregister.html", context )

@csrf_exempt
@login_required()
@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def editstudent(request, id):
    studentdetails = StudentRegistrationDetails.objects.get(id=id)
    return render(request, "fulalapp/edit_student.html", {'studentdetails':studentdetails})


@csrf_exempt
@login_required()
@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def updatestudent(request, id):
    studentdetails = StudentRegistrationDetails.objects.get(id=id)
    form = StudentRegistationDetailsForm(instance=studentdetails)

    if request.method == "POST":
        form = StudentRegistationDetailsForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.info(request, 'Updated Successfuly')
            #return render(request, "fulalapp/studentdetails.html")
    else:
        context = {'form': form}
        return render(request, "fulalapp/studentdetails.html", context)

@csrf_exempt
@login_required()
@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def deletestudent(request, id):
    s = StudentRegistrationDetails.objects.filter(id=id)
    s.delete()
    messages.info(request, "Successfuly Deleted")
    return redirect("fulalapp:studentdetails")
