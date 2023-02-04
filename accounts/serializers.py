from django.contrib.auth import authenticate
from rest_framework import serializers
from accounts.models import User

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')

    def validate(self, attrs):
        username = attrs.get('username').lower()
        password = attrs.get('password')
        
        if not username or not password:
            raise serializers.ValidationError("Please give both username and password")
       
        if not User.objects.filter(username=username).exists():
            raise serializers.ValidationError("Username does not exist")
        
        user = authenticate(request=self.context.get('request'),
                                username=username, password=password)
            
        if not user:
            raise serializers.ValidationError("Wrong Credentials")
        attrs['user']=user
        return attrs
class ChangePasswordSerializer(serializers.Serializer):
    model = User
    
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)   
    
    class Meta:
        model = User