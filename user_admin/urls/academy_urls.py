from django.urls import path

# import yung views
from user_admin.views import academy_views


academy_urlpatterns = [
    path('academy/programs', academy_views.programs, name="user_admin"),
    path('academy/module', academy_views.module, name="user_admin"),
    path('academy/course_data', academy_views.course_data, name="user_admin"),
    path('academy/courses', academy_views.courses, name="user_admin"),
    path('academy/programs_data', academy_views.programs_data, name="user_admin"),
    path('academy/category_academy', academy_views.category_academy, name="user_admin")

]