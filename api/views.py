from django.shortcuts import render,get_object_or_404
# from django.http import JsonResponse
from students.models import StudentData
from .serializers import StudentSerializer,EmployeeSerializer
from rest_framework.response import Response
from rest_framework import  status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from employees.models import Employees
from django.http import Http404
from rest_framework import mixins,generics,viewsets
from blogs.serializers import BlogSerializer,CommentSerializer
from blogs.models import Blog,Comment






# Create your views here.



# # def studentsView(request):
# #     data = StudentData.objects.all()
# #     student_data_list = list(data.values())
# #     return JsonResponse(student_data_list,safe=False)
# @api_view(['GET','POST'])
# def studentsView(request):
#     if request.method == 'GET':
#         students = StudentData.objects.all()
#         serializer = StudentSerializer(students, many=True)
#         return Response(serializer.data,status=status.HTTP_200_OK)
    
#     elif request.method == 'POST':
#         serializer = StudentSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data,status=status.HTTP_201_CREATED)
#         return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

# # Function Based View
# @api_view(['GET','PUT'])
# def studentsDetailView(request,pk):
#     try:
#         students = StudentData.objects.get(pk=pk)
#     except StudentData.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
#     if request.method == 'GET':
#         serializer = StudentSerializer(students)
#         return Response(serializer.data,status=status.HTTP_200_OK)
        
#     elif request.method == 'PUT':
#         serializer = StudentSerializer(students,data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data,status=status.HTTP_200_OK)
#         else:
#             return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
#     elif request.method == 'DELETE':
#         students.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
    
# # class Based View
# class Employee(APIView):
#     def get(self,request):
#         employees = Employees.objects.all()
#         serializer = EmployeeSerializer(employees, many=True)
#         return Response(serializer.data,status=status.HTTP_200_OK)
#     def post(self,request):
#         serializer = EmployeeSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data,status=status.HTTP_201_CREATED)
#         return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
        
# class EmployeeDetail(APIView):
#     def get_object(self,pk):
#         try:
#             return Employees.objects.get(pk=pk)
#         except Employees.DoesNotExist:
#             raise Http404("Employee does not exist")
        
#     def get(self, request, pk):
#         employee = self.get_object(pk)
#         serializer = EmployeeSerializer(employee)
#         return Response(serializer.data,status=status.HTTP_200_OK)
        
#     def put(self, request, pk):
#         employee = self.get_object(pk)
#         serializer = EmployeeSerializer(employee, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data,status=status.HTTP_200_OK)
#         return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
#     def delete(self, request, pk):
#         employee = self.get_object(pk)
#         employee.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
    
    
## Mixins
# class Employee(mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):
#     queryset = Employees.objects.all()
#     serializer_class = EmployeeSerializer

#     def get(self,request):
#         return self.list(request)
    
#     def post(self,request):
#         return self.create(request)
    
## Mixins
# class EmployeeDetail(mixins.RetrieveModelMixin,mixins.UpdateModelMixin, mixins.DestroyModelMixin,generics.GenericAPIView):
#     queryset = Employees.objects.all()
#     serializer_class = EmployeeSerializer

#     def get(self,request,pk):
#         return self.retrieve(request,pk)
    
#     def put(self,request,pk):
#         return self.update(request,pk)
#     def delete(self,request,pk):
#         return self.destroy(request,pk)

## Generics
# # class Employee(generics.ListAPIView,generics.CreateAPIView):
# class Employee(generics.ListCreateAPIView):
#     queryset = Employees.objects.all()
#     serializer_class = EmployeeSerializer

# ## Generics
# # class EmployeeDetail(generics.RetrieveAPIView,generics.UpdateAPIView,generics.DestroyAPIView):
# class EmployeeDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Employees.objects.all()
#     serializer_class = EmployeeSerializer
#     lookup_field = 'pk'

## Viewset

"""
class EmployeeViewset(viewsets.ViewSet):
    def list(self,request):
        queryset = Employees.objects.all()
        serializer = EmployeeSerializer(queryset, many=True)
        return Response(serializer.data)
    def create(self,request):
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def retrieve(self,request,pk=None):
        queryset = Employees.objects.all()
        employee = get_object_or_404(queryset, pk=pk)
        serializer = EmployeeSerializer(employee)
        return Response(serializer.data,status=status.HTTP_200_OK)
    def update(self,request,pk=None):
        queryset = Employees.objects.all()
        employee = get_object_or_404(queryset, pk=pk)
        serializer = EmployeeSerializer(employee, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def destroy(self,request,pk=None):
        queryset = Employees.objects.all()
        employee = get_object_or_404(queryset, pk=pk)
        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

"""
## ModelViewset

class EmployeeViewset(viewsets.ModelViewSet):
    queryset = Employees.objects.all()
    serializer_class = EmployeeSerializer

# router.register('employees', EmployeeViewset, basename='employee')


class BlogsView(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class CommentsView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class BlogDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'pk'


class CommentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_field = 'pk'
