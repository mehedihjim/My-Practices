#This is probably not my first python program/file- but I'm starting again

name = input("What's your name?: ")
age = 23
food = 'Pizza'
isProgrammer = input("Are you a Programmer? (yes/no): ").strip().lower()


if isProgrammer == 'yes':
    print(f"Hi, I'm {name}, a {age} years old programmer- who loves eating {food}") #updated version
else:
    print('I am', name, 'I love pizza' )

# Shopping Cart
item = input("What you want to buy?: ")
price= float(input("You can choose the price by yourself: "))
quantity= int(input("How many do you want?: "))

print(f"You have bought {quantity} {item}s, and the total is ${price * quantity}")