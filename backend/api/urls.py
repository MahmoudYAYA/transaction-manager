from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views
from .views import TransactionRetrieveUpdateDestroyView, RegisterView

urlpatterns = [
    # Transactions (protégées — JWT requis)
    path('transactions/', views.transactionListCreateView.as_view()),
    path('transactions/<uuid:id>/', TransactionRetrieveUpdateDestroyView.as_view()),

    # Section 2 : Auth — pas besoin de token pour ces routes
    path('auth/register/', RegisterView.as_view()),
    path('auth/login/', TokenObtainPairView.as_view()),    # retourne access + refresh token
    path('auth/refresh/', TokenRefreshView.as_view()),     # renouveler le token
]

