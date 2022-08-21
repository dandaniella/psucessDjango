from django.urls import path
from . import views


urlpatterns = [
    path('', views.dashboard, name="user_org"),
    path('add_orgMember', views.add_orgMember, name="user_org"),
    path('view_orgMember', views.view_orgMember, name="user_org"),
    path('update_orgMember', views.update_orgMember, name="user_org"),
    path('deact_orgMember', views.deact_orgMember, name="user_org"),
    path('update_orgInfo', views.update_orgInfo, name="user_org"),
    path('view_orgInfo', views.view_orgInfo, name="user_org"),
    # path('create_newOrg', views.create_newOrg, name="user_org"),
    path('deact_orgAccount', views.deact_orgAccount, name="user_org")
    
]