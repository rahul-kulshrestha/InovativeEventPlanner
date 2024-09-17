from django.urls import path
from api import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('test/', views.test,name='test'),
    path('register/',views.UserRegistrationView.as_view(),name='register'),
    path('login/', views.UserLoginView.as_view(), name='login'),
    path('changeuserpassword/', views.ChangeUserPasswordView.as_view(),name='changeuserpassword'),
    path('destination/',views.DestinationListCreateView.as_view(),name='destination'),
    # path('destination/<int:pk>/',views.DestinationRetrieveUpdateDeleteView.as_view(),name='destination2'),
    path('destinationslist/', views.DestinationLIstView.as_view(), name='DestinatinsList'),
    path('destination/<int:pk>/',views.DestinationDetailView.as_view(),name='destinationDetail'),

]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
