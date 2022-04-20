from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Product
from .serializers import ProductSerialiser




class ProductList(ListAPIView):
	queryset = Product.objects.all()
	serializer_class = ProductSerialiser


