from django.urls import include, path
from . import views

app_name = 'accounts'
urlpatterns = [
    # Outros URLs da sua aplicação principal...
    # ex: accounts/
    path('login', views.login_view, name='login_view'),
]
