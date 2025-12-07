# serializers.py
from rest_framework import serializers
from .models import Transaction

class TransactionSerialiser(serializers.ModelSerializer):

    class Meta: 
        model = Transaction  # ← Important : c'est "model", pas "modeles"
        fields = ["id", "text", "amount", "created_at"]
        read_only_fields = ["id", "created_at"]