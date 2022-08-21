from django.shortcuts import render


# dito nyo po lagay yung mga def functions po


def dashboard(request):
    return render(request, 'user_admin/dashboard.html')


def programs(request):
    return render(request, 'user_admin/academy/setups/programs.html')

def module(request):
    return render(request, 'user_admin/academy/setups/module.html')

def course_data(request):
    return render(request, 'user_admin/academy/setups/course_data.html')

def courses(request):
    return render(request, 'user_admin/academy/setups/courses.html')

def programs_data(request):
    return render(request, 'user_admin/academy/setups/programs_data.html')

def category_academy(request):
    return render(request, 'user_admin/academy/setups/category_academy.html')