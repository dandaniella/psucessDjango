from django.shortcuts import render


# dito nyo po lagay yung mga def functions po


def view_member(request):
   return render(request,'user_admin/view_member.html')

def add_member(request):
   return render(request,'user_admin/add_member.html')