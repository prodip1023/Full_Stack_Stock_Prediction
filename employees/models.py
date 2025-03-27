from django.db import models

# Create your models here.
class Employees(models.Model):
    employee_id = models.AutoField(primary_key=True)
    employee_name = models.CharField(max_length=50)
    employee_age = models.IntegerField()
    employee_city = models.CharField(max_length=50)
    employee_position = models.CharField(max_length=50)
    employee_salary = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.employee_name