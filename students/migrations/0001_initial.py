# Generated by Django 5.1.7 on 2025-03-23 04:36

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="StudentData",
            fields=[
                ("student_id", models.AutoField(primary_key=True, serialize=False)),
                ("student_name", models.CharField(max_length=50)),
                ("student_age", models.IntegerField()),
                ("student_city", models.CharField(max_length=50)),
            ],
        ),
    ]
