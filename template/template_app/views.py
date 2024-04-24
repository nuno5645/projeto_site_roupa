from django.shortcuts import render

def home(request):
    return render(request, 'template_app/home.html')