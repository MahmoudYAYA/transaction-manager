from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Transaction
from .serializers import TransactionSerialiser, UserRegisterSerializer


# Section 3 : retourne seulement les transactions de l'utilisateur connecté
class transactionListCreateView(generics.ListCreateAPIView):
    serializer_class = TransactionSerialiser
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # filtre par l'utilisateur du token JWT
        return Transaction.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # lie automatiquement la transaction à l'utilisateur connecté
        serializer.save(user=self.request.user)


class TransactionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TransactionSerialiser
    permission_classes = [IsAuthenticated]
    lookup_field = "id"

    def get_queryset(self):
        return Transaction.objects.filter(user=self.request.user)


# Section 2 : créer un compte (pas besoin d'être connecté)
class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Compte créé avec succès"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
