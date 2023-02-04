from django.db import models
import uuid
from datetime import timedelta
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.contrib.auth.models import Permission
from django.utils import timezone


class MyUserManager(BaseUserManager):
    def _create_user(self, username, password, first_name, last_name, is_student, is_staff, is_superuser, **extra_fields):
        ""
        ""
        now = timezone.now()
        username = self.normalize_username(username)
        user = self.model(username=username,
                          first_name=first_name,
                          last_name=last_name,
                          is_staff=is_staff,
                          is_student=is_student,
                          is_superuser=is_superuser,
                          is_active = True,
                          last_login=now,
                          date_joined=now, **extra_fields)
        user.set_password(password)
        user.save(using=self.db)

        return user
    
    def _create_user(self, username, password, first_name, last_name, **extra_fields):
        ""
        ""
        return self._create_user(username, password, first_name, last_name, is_student=False, is_staff=False, is_superuser=False,
                                 **extra_fields)
    
    def create_superuser(self, username, first_name='', mobile_number='0724958596', last_name='', password=None, **extra_fields):
        """
        Create a super user.

        :param email: string
        :param first_name: string
        :param last_name: string
        :param password: string
        :param extra_fields:
        :return: User
        """
        return self._create_user(username, password, first_name,last_name, mobile_number, is_staff=True, is_superuser=True, 
                                 **extra_fields)
    # We have overrided the Abstact User Class and created 
    # our own custom user model to use

class User(AbstractBaseUser, PermissionsMixin,):
            
            

            """
    Model that represents an user.

    To be active, the user must register t use the system.
    """
            id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
            first_name = models.CharField(max_length=50, null=False)
            middle_name = models.CharField(max_length=50, null=True)
            last_name = models.CharField(max_length=50, null=False)
            mobile_number = models.CharField(max_length=20)
            profile_image = models.ImageField(upload_to="img", blank=True)

            username = models.CharField(max_length=12, blank=True, unique=True)

    #type of profile
            is_staff = models.BooleanField(default=False)
            is_superuser = models.BooleanField(default=False)
            is_active = models.BooleanField(default=True)

            date_joined = models.DateTimeField(auto_now_add=True)
            date_updated = models.DateTimeField(auto_now=True)
            activation_key = models.UUIDField(unique=True, default=uuid.uuid4)
    
            USERNAME_FIELD = 'username' # Set email instead of username to be the default login field
    
            objects = MyUserManager()

            class Meta:
                ordering = ('-date_updated',)
        # permissions = (
        #             ("view_user", "Can view user"),
        #         )
            def __str__(self):
    
                return self.username


            def __str__(self):
                return "{} -{}".format(self.username)


    