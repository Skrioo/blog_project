from django.db import models
from django.contrib.auth.models import User
from django.db import connection

dbbs=r'/home/skrioo/BLOG/blog_project/db.sqlite3'

class Posts(models.Model):
    title = models.CharField(max_length=100)
    post = models.CharField(max_length=2000)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name ='blog_posts')