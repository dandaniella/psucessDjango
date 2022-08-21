from django.shortcuts import render

# Create your views here.

def dashboard(request):
    return render(request, 'user_org/dashboard.html')

def add_orgMember(request):
    return render(request, 'user_org/add_orgMember.html')

def view_orgMember(request):
    return render(request, 'user_org/view_orgMember.html')

def update_orgMember(request):
    return render(request, 'user_org/update_orgMember.html')

def deact_orgMember(request):
    return render(request, 'user_org/deact_orgMember.html')

def update_orgInfo(request):
    return render(request, 'user_org/update_orgInfo.html')

def view_orgInfo(request):
    return render(request, 'user_org/view_orgInfo.html')

def deact_orgAccount(request):
    return render(request, 'user_org/deact_orgAccount.html')
