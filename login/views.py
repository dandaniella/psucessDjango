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
        request.session['USER'] = request.GET.get('user')
        if(request.session['USER']=="Admin"):
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



