from django.urls import path
from .views import home, subscribe_view, register, login_view, logout_view, place_order, menu

urlpatterns = [
    path('', home, name="home"),
    path('register/', register, name="register"),
    path('menu/', menu, name='menu'),
    path('login/', login_view, name="login"),
    path('logout/', logout_view, name="logout"),
    path('order/', place_order, name="order"),
     path('subscribe/', subscribe_view, name='subscribe'),
]
