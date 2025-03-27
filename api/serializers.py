from rest_framework import serializers
from students.models import StudentData
from employees.models import Employees

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentData
        fields = '__all__'


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = '__all__'