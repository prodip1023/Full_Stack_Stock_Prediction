import django_filters
from .models import Employees

class EmployeFilter(django_filters.FilterSet):
    employee_position = django_filters.CharFilter(field_name='employee_position',lookup_expr='iexact')
    employee_city = django_filters.CharFilter(field_name='employee_city',lookup_expr='iexact')
    employee_name = django_filters.CharFilter(field_name='employee_name',lookup_expr='icontains')
    employee_id = django_filters.RangeFilter(field_name='employee_id')

    class Meta:
        model = Employees
        fields = ['employee_position', 'employee_city','employee_name','employee_id']

