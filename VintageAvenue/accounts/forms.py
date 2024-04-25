# accounts/forms.py
from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    nome = forms.CharField(max_length=100)
    apelido = forms.CharField(max_length=100)

    class Meta(UserCreationForm.Meta):
        model = CustomUser
        fields = ('nome', 'apelido', 'email', 'password1', 'password2')

    def save(self, commit=True):
        user = super().save(commit=False)
        user.username = self.cleaned_data['nome'] + self.cleaned_data['apelido']
        if commit:
            user.save()
        return user
