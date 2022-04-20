
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import Myuser
from rest_framework import serializers

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        

        return token


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Myuser
        fields = ('email', 'username','password',)
        extra_kwargs ={'password':{'write_only':True}}
        
    
    def create_user(self, validated_data):
        password = validated_data.pop('password',None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
    