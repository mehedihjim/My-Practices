#Calculator Program

first_num = float(input("Enter the first number: "))
operator = input("Enter an operator (+ - * /): ")
second_num = float(input("Enter the second number: "))


if operator == '+':
    result = first_num + second_num
    print(result)
elif operator == '-':
    result = first_num - second_num
    print(result)
elif operator == '*':
    result = first_num * second_num
    print(result)
elif operator == '/':
    result = first_num / second_num
    print(result)
else:
    print("Something is wrong")