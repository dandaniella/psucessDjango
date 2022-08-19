# from crypt import methods
from django.shortcuts import render
# import boto3

# Create your views here.
# def index(request):
#    return render(request, 'form.html')

# def upload(request):
#     if request.method == 'POST':
#         s3 = boto3.resource('s3')
#         s3.Bucket("psuccess").put_object(Key='a_python_file.py', Body=request.files["myfiles"])

def dashboard(request):
    return render(request, 'user_admin/dashboard.html')

def events(request):
    return render(request, 'user_admin/events.html')

def events_type(request):
    if request.method == 'POST':
        data = request.POST
        image = request.FILES.get('image')

    return render(request, 'user_admin/events/setups/event_type.html')