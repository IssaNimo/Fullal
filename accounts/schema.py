import graphene
from graphene_django import DjangoObjectType
from accounts.models import User

class UsersProfile(DjangoObjectType):
   
    class Meta: 
        model = User
        fields = ('username','password', 'id')

class Query(graphene.ObjectType):
    Users = graphene.List(UsersProfile)
    
    def resolve_Users(root, info, **kwargs):
        return User.objects.all()
    
class UserMutation(graphene.Mutation):
    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        id = graphene.ID()
    user = graphene.Field(UsersProfile)
    user = graphene.Field(UsersProfile)


    @classmethod
    def mutate(cls, root, info, text, id):
        user = User.objects.get(PK=id) 
        user.text = text
        user.save()
        return UserMutation(user=user)



schema = graphene.Schema(query=Query, mutation=UserMutation)
