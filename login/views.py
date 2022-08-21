from asyncio.windows_events import NULL
from email import message
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

import user_admin
# Create your views here.


def auth(request):
    try:
        print("nakadaaan ditttto")
        request.session['TOKEN'] = request.GET.get('token')
        request.session['USERID'] = request.GET.get('userID')
        request.session['EMAIL'] = request.GET.get('email')
        request.session['FIRSTNAME'] = request.GET.get('firstName')
        request.session['MIDDLENAME'] = request.GET.get('middleName')
        request.session['LASTNAME'] = request.GET.get('lastName')
        request.session['USERID'] = request.GET.get('fullName')
        request.session['ACCOUNTTYPE'] = request.GET.get('accountType')
        request.session['PROFILEPHOTO'] = request.GET.get('profilePhoto')
        request.session['TRANSACTIONID'] = request.GET.get('transactionID')
        request.session['USERORGANIZATIONID'] = request.GET.get('userOrganizationID')
        if(request.session['ACCOUNTTYPE']=="Admin"):
            return redirect("/user_admin/")
        else:
            return redirect("/login/")
    except:
        return HttpResponse('ERROR')

def token(request):
    try:
        token = request.session['TOKEN']
        return(True)
    except:
       return render(request,'login/login.html')

def say_hello(request):
    # if token(request):
    #     print (request.GET.get('message'))
    # return HttpResponse('Hello World')

    # return render(request,'helloWorld.html', {'name' : 'Daniella'})
    # username = "Daniella"
    # if request.session.has_key('username'):
    #   username = request.session['username']
    #   return render(request, 'helloWorld.html', {"username" : username})
    # else:
    #     return render(request, 'login.html', {})
 
  
    message = "hi"
    message = request.GET.get('token')
    hey = request.GET.get('token') 
    request.session['TOKEN'] = request.GET.get('token') 
    return HttpResponse(hey)

def login(request):
    # print ( request.session['TOKEN'] )
    request.session.flush()
    print("wala ng session")
    try:
        print(request.session['TOKEN'])
    except:
        print ( "no session" )
    return render(request,'login/login.html')



