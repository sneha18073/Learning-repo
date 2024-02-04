'''Concepts in this chapter are
1. Variables
2. Operators
3. type() function and typecasting
4. Input function
'''

#Practice set - 02
#Write a python program to add two numbers
a = 23
b = 45
print(a+b)

#Write a python progam to find the remainder when dividen by a number z
z = input("Enter a number which you want to divide 2 ")
z = int(z)
print(z%2)

#Check the type of variable assigned using input() function
inp = input("assign a variable")
print(type(inp))


#Use Assignment operator to compare if a is greater than b or not when a = 34 and b = 80
a1 =  34
b1 = 80
print(a1>b1)


#Write a program to find the square of a number entered by the user
num = input("Enter the number you want to square ")
num = int(num)
print(num*num)

#Write a program to find average of two number entered by users 
num1= input("Enter the 1st number ")
num1 = int(num1)
num2 = input("Enter the 2nd number ")
num2 = int(num2)

print((num1+num2)/2)
