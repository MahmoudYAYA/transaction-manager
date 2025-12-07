
from django.contrib import admin
from django.urls import path, include

# c'est l'url parent qui nous permetra de récouperer tous les apis de l'appli 
urlpatterns = [
    path("api/", include ('api.urls'))
]
