from django.shortcuts import render
from django.views import View

# Create your views here.

class RegistrationView(View):
    def get(self, request):
        return render(request, 'authentication/register.html')

class ResetpasswordView(View):
     def get(self, request):
        return render(request, 'authentication/reset_password.html')

class NewpasswordView(View):
     def get(self, request):
        return render(request, 'authentication/set_newpassword.html')