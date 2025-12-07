from django.shortcuts import render
from rest_framework import generics
from .models import Transaction
from .serializers import TransactionSerialiser

# Create your views here.
class transactionListCreateView(generics.ListCreateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerialiser


class TransactionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerialiser
    lookup_field = "id"
