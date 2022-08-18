from django.shortcuts import render

# Create your views here.

def dashboard(request):
    return render(request, 'user_admin/dashboard.html')

def events(request):
    return render(request, 'user_admin/events.html')

def events_type(request):
    return render(request, 'user_admin/events/setups/event_type.html')