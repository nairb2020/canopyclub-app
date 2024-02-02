import json

from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_POST


@require_POST
def login_view(request):
    data = json.loads(request.body)
    username = data["username"]
    password = data["password"]
    if not username.strip() or not password.strip():
        return JsonResponse({"detail": "Please provide username and password."})
    user = authenticate(request, username=username, password=password)
    return JsonResponse({"success": False})
