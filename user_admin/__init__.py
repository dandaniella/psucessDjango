from django.urls import path
from . import views
from .event_urls import event_urlpatterns

common_urlpattern = [path('', views.dashboard, name="user_admin")]
urlpatterns = event_urlpatterns + common_urlpattern