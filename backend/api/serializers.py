from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Transaction


class TransactionSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ["id", "text", "amount", "created_at"]
        read_only_fields = ["id", "created_at"]


# Section 2 : serializer pour créer un compte utilisateur
class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = User
        fields = ["username", "email", "password"]

    def create(self, validated_data):
        return User.objects.create_user(
            username=validated_data["username"],
            email=validated_data.get("email", ""),
            password=validated_data["password"],
        )