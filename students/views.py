from django.shortcuts import render
from django.http import HttpResponse,JsonResponse

def student(request):
    data ={
        'name': 'John Doe',
        'age': 25,
        'city': 'New York'
    }
    #return HttpResponse(data)
    return JsonResponse(data)


