from django.shortcuts import render, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets
from api.serializers import UserRegisterSerializer, UserLoginSerializer, ChangeUserPasswordSerializer,DestinationSerializer, DestinationListSerializer, DestinationDeatilSerializer
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from api.renderers import UserRenderer
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt
from api.models import Destination
# Create your views here.
def test(request):
    return HttpResponse('hello world')

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class UserRegistrationView(APIView):
    # renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        serializer = UserRegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        email = request.data['email']
        password = request.data['password']
        user = authenticate(email=email,password=password)
        if user is not None:
            token = get_tokens_for_user(user)
            return Response({"token":token}, status=status.HTTP_200_OK)
        return Response({"message": "Register sueccssfully"}, status= status.HTTP_201_CREATED)
    

class UserLoginView(APIView):
    # renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        # print(request)
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email = request.data['email']
            password = request.data['password']
            user = authenticate(email=email,password=password)
            if user is not None:
                token = get_tokens_for_user(user)
                return Response({"token":token}, status=status.HTTP_200_OK)
            return Response({'non_field_error':'Email & password is Casesensitive Try Again'}, status= status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class ChangeUserPasswordView(APIView):
    # renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    # @csrf_exempt
    def post(self,request,format=None):
        print(request.user)
        serializer = ChangeUserPasswordSerializer(data=request.data, context={"user":request.user})
        serializer.is_valid(raise_exception=True)
        return Response({"message": "Password change sueccssfully"}, status= status.HTTP_200_OK)
    
class ViewSet(viewsets.ModelViewSet):
    queryset = Destination.objects.all()  # Fetch all booking records
    serializer_class = DestinationSerializer

class DestinationListCreateView(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        snippets = Destination.objects.all()
        serializer = DestinationSerializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = DestinationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class DestinationRetrieveUpdateDeleteView(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, pk):
        try:
            return Destination.objects.get(pk=pk)
        except Destination.DoesNotExist:
            raise Response('Destination Not Exist', status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = DestinationSerializer(snippet)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = DestinationSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class DestinationLIstView(APIView):
    def get(self, request, format=None):
        destinatins = Destination.objects.all()
        serializer = DestinationListSerializer(destinatins, many=True)
        return Response(serializer.data)

class DestinationDetailView(APIView):
    def get_object(self, pk):
        try:
            return Destination.objects.get(pk=pk)
        except Destination.DoesNotExist:
            raise Response('Destination Not Exist', status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk, format=None):
        destinatin = Destination.objects.get(pk=pk)
        serializer = DestinationDeatilSerializer(destinatin)
        return Response(serializer.data)
