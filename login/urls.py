from django.urls import path
from . import views

# URLConfig
urlpatterns = [
    path('', views.login),
    path('test', views.say_hello),
    path('token', views.token),
    path('auth', views.auth)

]