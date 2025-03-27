# Full_Stack_Stock_Prediction

## Crete an Application of this flow

- conda create -n env stockpred python==3.10 -y 
- conda activate stockpred
- pip install -r requirements.txt
- django-admin startproject django_rest_main .
- install djangorestframework and  settings.py - INSTALLED_APPS added 'rest_framework'.
- python manage.py startapp students
- settings.py - INSTALLED_APPS added 'students'. - define view function inside views.py and define url-pattern for our view inside of urls.py
- python manage.py runsurver
- Send the request

## Model
- python manage.py createsuperuser
- Create Model in models.py and add to admin.py for register models.
- python manage.py makemigrations
- python manage.py migrate



Docs :
- https://docs.djangoproject.com/en/5.1/
- https://www.django-rest-framework.org/
   - API Guide