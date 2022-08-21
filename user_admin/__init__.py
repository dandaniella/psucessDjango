from django.urls import path
from . import views
from .views import event_views
from .urls.event_urls import event_urlpatterns

common_urlpattern = [path('', event_views.dashboard, name="user_admin")]
urlpatterns = event_urlpatterns + common_urlpattern