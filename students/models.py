from django.db import models

# Create your models here.
class StudentData(models.Model):
    student_id = models.AutoField(primary_key=True)
    student_name = models.CharField(max_length=50)
    student_age = models.IntegerField()
    student_city = models.CharField(max_length=50)
    
    def __str__(self):
        return self.student_name