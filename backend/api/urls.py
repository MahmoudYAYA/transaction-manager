from django.contrib import admin
from django.urls import path
from . import views;
from .views import (
    TransactionRetrieveUpdateDestroyView
)


urlpatterns = [
    path('transactions/', views.transactionListCreateView.as_view()),
    path("transactions/<uuid:id>/", TransactionRetrieveUpdateDestroyView.as_view()),
]

