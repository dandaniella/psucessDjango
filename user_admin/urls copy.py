from django.urls import path
from . import views


urlpatterns = [
    path('', views.dashboard, name="user_admin"),
    path('events', views.events, name="user_admin"),
    path('events_type', views.events_type, name="user_admin"),

    # category
    path('event/category', views.event_category, name="category")
]