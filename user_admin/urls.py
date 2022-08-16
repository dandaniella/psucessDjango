from django.urls import path
from . import views


urlpatterns = [
    path('', views.dashboard, name="user_admin"),
    path('events', views.events, name="user_admin")
]