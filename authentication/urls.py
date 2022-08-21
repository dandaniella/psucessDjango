from .views import RegistrationView, ResetpasswordView, NewpasswordView

from django.urls import path

urlpatterns = [
    path('register', RegistrationView.as_view(), name="register"),
    path('reset_password', ResetpasswordView.as_view(), name="reset_password"),
    path('set_newpassword', NewpasswordView.as_view(), name="set_newpassword")
]