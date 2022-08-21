from django.urls import path
# from . import views
from .views import event_views
from .urls.event_urls import event_urlpatterns
from .urls.academy_urls import academy_urlpatterns


common_urlpattern = [
   
    path('', event_views.dashboard, name="user_admin")
    ]

urlpatterns = event_urlpatterns + common_urlpattern + academy_urlpatterns