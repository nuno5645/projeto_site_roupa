from django.shortcuts import render
from rest_framework.decorators import api_view
# from rest_framework.response import JsonResponse
from rest_framework import status
from django.contrib.auth import authenticate, login
from django.http import JsonResponse


@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    
    user = authenticate(username=username, password=password)

    if user is not None:
        login(request, user)
        return JsonResponse({'message': 'Login successful'}, status=status.HTTP_200_OK)
    
    return JsonResponse({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)