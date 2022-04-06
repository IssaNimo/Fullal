from django.views.decorators.cache import cache_control
from django.shortcuts import render, redirect, reverse
from django.contrib.auth.models import User, auth
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt

# Login User.
@csrf_exempt
@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def login(request):
    if(request.method == 'POST'):
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            messages.info(request, 'Welcome')
            return redirect("fulalapp:homepage")
        else:
            messages.info(request, 'Invalid credentials')
            return render(request, 'fulalapp/accounts/login.html')

    else:
        return render(request, 'fulalapp/accounts/login.html')

# Register New User
@csrf_exempt
@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def register(request):
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        email = request.POST['email']

        if password1==password2:

            if User.objects.filter(username=username).exists():
                messages.info(request, 'Username Taken')
                return redirect('accounts:register')
                #print('Username taken')
            elif User.objects.filter(email=email).exists():
                #print('Email taken')
                messages.info(request, 'Email Taken')
                return redirect('accounts:register')
            else:
                user = User.objects.create_user(username=username, password=password1, email=email, first_name=first_name, last_name=last_name)
                user.save();
                messages.info(request, 'New User Created')
                #print('User created')
                return render(request, 'fulalapp/accounts/register.html')
        else:
                messages.info(request, 'Password not matching ...')
                return redirect('accounts:register')

        messages.info(request, 'Invalid credentials')
        return render(request, 'fulalapp/accounts/register.html')

    else:
        return render(request, 'fulalapp/accounts/register.html')

# Log out User
@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def logout(request):
    auth.logout(request)
    #del request.session['user_id']
    return redirect('accounts:login')
