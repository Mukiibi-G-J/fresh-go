from rest_framework import serializers
from .models import Product, ProductImage

class ProductImageSerializers(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['image', 'alt_text']




class ProductSerialiser(serializers.ModelSerializer):
    product_image = ProductImageSerializers(many=True)
    class Meta:
        model = Product
        fields = ['id', 'category', 'title', 'description', 'slug', 'regular_price','product_image']