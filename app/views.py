from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from .models import Food, Order
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.conf import settings


def home(request):
    foods = Food.objects.all()
    return render(request, 'index.html', {'foods': foods})

def menu(request):
    if request.user.is_authenticated:
        foods = Food.objects.all()
        return render(request, 'menu.html', {'foods': foods})
    return redirect('login')

@login_required(login_url='login')
def subscribe_view(request):
    if request.method == "POST":
        email = request.POST.get("email")
        return redirect("home")
    return render(request, "subscribe.html")

def register(request):
    if request.method == "POST":
        username = request.POST.get('username', '').strip()
        password1 = request.POST.get('password1', '').strip()
        password2 = request.POST.get('password2', '').strip()

        # Check if any field is empty
        if not username or not password1 or not password2:
            messages.error(request, "All fields are required!")
            return redirect('register')

        # Check if passwords match
        if password1 != password2:
            messages.error(request, "Passwords do not match!")
            return redirect('register')

        # Check if username already exists
        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already taken!")
            return redirect('register')

        # Create user
        user = User.objects.create_user(username=username, password=password1)
        messages.success(request, "Registration successful! Please log in.")
        return redirect('login')
    
    return render(request, 'register.html')


def login_view(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            messages.success(request, "Login successful!")
            return redirect('home')
        else:
            messages.error(request, "Invalid username or password.")
    
    return render(request, 'login.html')

def logout_view(request):
    logout(request)
    messages.success(request, "You have been logged out.")
    return redirect('login')

@login_required(login_url='login')
def place_order(request):
    if request.method == 'POST':
        food_id = request.POST.get('food_id')
        quantity = request.POST.get('quantity', 1)

        try:
            food = Food.objects.get(id=food_id)
            order = Order(user=request.user, food=food, quantity=quantity)
            order.save()
            
            messages.success(request, f"Your order for {food.name} (x{quantity}) has been placed!")

            notify_admin(order)
            return redirect('home')

        except Food.DoesNotExist:
            messages.error(request, "The selected food item does not exist.")
        except Exception as e:
            messages.error(request, f"An error occurred: {str(e)}")
        
        return redirect('order')

    foods = Food.objects.all()
    return render(request, 'order.html', {'foods': foods})

def notify_admin(order):
    subject = f"New Order: #{order.id}"
    message = f"New order placed: {order.food.name} (x{order.quantity}) by {order.user.username}."
    from_email = settings.DEFAULT_FROM_EMAIL
    recipient_list = ['aldric3003mercenary@gmail.com']

    try:
        send_mail(subject, message, from_email, recipient_list)
    except Exception as e:
        print(f"Email sending failed: {e}")

@login_required(login_url='login')
def order_confirmation(request, order_id):
    try:
        order = Order.objects.get(id=order_id, user=request.user)
        return render(request, 'order_confirmation.html', {'order': order})
    except Order.DoesNotExist:
        messages.error(request, "Order not found or unauthorized access.")
        return redirect('home')
