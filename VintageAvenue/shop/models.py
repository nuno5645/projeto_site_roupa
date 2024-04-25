from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    
    CONDITION_CHOICES = [
        ('like_new', 'Like New'),
        ('gently_used', 'Gently Used'),
        ('visible_wear', 'Visible Wear'),
        ('needs_repair', 'Needs Repair')
    ]

    name = models.CharField(max_length=255)
    description = models.TextField()
    condition = models.CharField(max_length=12, choices=CONDITION_CHOICES, default='like_new')
    price = models.DecimalField(max_digits=6, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    seller = models.ForeignKey(User, on_delete=models.CASCADE, related_name='listed_products')
    available = models.BooleanField(default=True)
    original_purchase_date = models.DateField(null=True, blank=True)
    size = models.CharField(max_length=50, blank=True)
    image = models.ImageField(upload_to='product_images/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    favorited_by = models.ManyToManyField(User, related_name='favorites', blank=True)

    def __str__(self):
        return self.name
    
    def count_favorites(self):
        return self.favorited_by.count()
    
    
class Order(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, through='OrderItem')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    completed = models.BooleanField(default=False)
    
    def __str__(self):
        return f"Order {self.id} by {self.customer}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price_at_time = models.DecimalField(max_digits=6, decimal_places=2) 

    def __str__(self):
        return f"{self.quantity} of {self.product.name}"