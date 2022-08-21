from django.shortcuts import render

# Create your views here.

def dashboard(request):
    return render(request, 'client/dashboard.html')

def update_clientInfo(request):
    return render(request, 'client/update_clientInfo.html')

def view_clientInfo(request):
    return render(request, 'client/view_clientInfo.html')

def deact_clientAccount(request):
    return render(request, 'client/deact_clientAccount.html')
