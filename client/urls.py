from django.urls import path
from . import views


urlpatterns = [
    path('', views.dashboard, name="client"),
    path('update_clientInfo', views.update_clientInfo, name="client"),
    path('view_clientInfo', views.view_clientInfo, name="client"),
    path('deact_clientAccount', views.deact_clientAccount, name="client")
    
]