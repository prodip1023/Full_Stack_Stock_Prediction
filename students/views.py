from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def student(request):
    data = [
        {'name': 'John', 'age': 25},
        {'name': 'Jane', 'age': 28},
        {'name': 'Alice', 'age': 30}
    ]
    #return HttpResponse("This is the student page")
    return HttpResponse(data)