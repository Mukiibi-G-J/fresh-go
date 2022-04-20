from django.db import models
from django.contrib.auth.models import User,AbstractBaseUser, PermissionsMixin,BaseUserManager




class CustomeManager(BaseUserManager):
	
	def create_superuser(self,email, username, firstname, lastname, password, **other_fields):
		other_fields.setdefault('is_staff', True)
		other_fields.setdefault('is_superuser', True)
		other_fields.setdefault('is_active', True)
        
		if other_fields.get('is_staff') is not True:
			raise ValueError('Super user must be assigned to is_staff=True')
		if other_fields.get('is_superuser') is not True:
			raise ValueError('Super user must be assigned to is_superuser=True')

		return self.create_user(email=email,  password=password, username=username, firstname=firstname ,lastname=lastname,**other_fields)

	def create_user(self, email,  lastname, username, firstname, password ,**other_fields):
		if not email:
		    raise ValueError(_('You must provide an email address'))

		email = self.normalize_email(email)
		user = self.model(email=email, password=password, username=username, firstname=firstname ,lastname=lastname,**other_fields)

		user.set_password(password)                
		    
		user.save()
		return user


class Myuser(AbstractBaseUser, PermissionsMixin):
	username = models.CharField(max_length=255, unique=True)
	firstname = models.CharField(max_length=255)
	lastname =models.CharField(max_length=255)
	email = models.EmailField(unique=True)
	phone = models.IntegerField(null=True)
	is_staff = models.BooleanField(default=False)
	is_active = models.BooleanField(default=True)
	created_at = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
    
	objects = CustomeManager()

	USERNAME_FIELD='email'
	REQUIRED_FIELDS =['username','firstname', 'lastname']
