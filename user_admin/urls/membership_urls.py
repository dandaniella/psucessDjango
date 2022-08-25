from django.urls import path
from . import views


urlpatterns = [
    path('members', views.member, name="members"),
    path('add_member', views.add_member, name="add_member")
]