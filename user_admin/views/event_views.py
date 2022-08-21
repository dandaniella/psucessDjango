# from crypt import methods
from asyncio.windows_events import NULL
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect

# import boto3

# Create your views here.
# def index(request):
#    return render(request, 'form.html')

# def upload(request):
#     if request.method == 'POST':
#         s3 = boto3.resource('s3')
#         s3.Bucket("psuccess").put_object(Key='a_python_file.py', Body=request.files["myfiles"])


def isAuth(request):
    try:
        if request.session['TOKEN'] != "None":
            return(True)
    except:
       return(False)

    # try:
    #     token=request.session['TOKEN'] 
    #     print(token)
    #     return(True)
    # except:
    #     print("except")
    #     return redirect("/login/")

    
def dashboard(request):
    return render(request, 'user_admin/dashboard.html')

def events(request):
    if token(request):
        return render(request, 'user_admin/events.html')
    else:
        return HttpResponse("UNAUTHORIZE ACCESS ")


def events_type(request):
    print("hellollllll")
    if isAuth(request) :
        return render(request, 'user_admin/events.html')
    else:
        return HttpResponse("UNAUTHORIZE ACCESS ")
    # else:
    #     return render(request, 'user_admin/events/setups/event_type.html')


# EVENT CATEGORY
def event_category(request):
    return render(request, 'user_admin/events/setups/category.html')
