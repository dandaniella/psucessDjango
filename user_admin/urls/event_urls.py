from django.urls import path

# import yung views
from user_admin.views import event_views


event_urlpatterns = [
    
    path('events', event_views.events, name="user_admin"),
    # path('event/type', event_views.events_type, name="user_admin"),

    # category
    path('event/category', event_views.event_category, name="category"),
    path('event/type', event_views.events_type, name="type"),
    path('event/tags', event_views.events_tags, name="tags"),                                                                 
    path('event/subcategory', event_views.events_subcategory, name="subcategory"), 
    path('event/venue', event_views.events_venue, name="subcategory"),   
]