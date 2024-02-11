# Conditional statements
# If and else and else if statements 
# Switch cae statements

# Write a program to find the greatest number entered by the users
user1 = input("Enter your secret number: ")
user1 = int(user1)
user2 = input("Enter your secret number: ")
user2 = int(user2)
user3 = input("Enter your secret number: ")
user3 = int(user3)
user4 = input("Enter your secret number: ")
user4 = int(user4)

if(user1>user2 and user1>user3 and user1>user4):
    print("User1 has entered the greatest number of all 4 users")
elif(user2>user1 and user2>user3 and user2>user4):
    print("User2 has entered the greatest number of all 4 users")
elif(user3>user1 and user3>user2 and user3>user4):
    print("User3 has entered the greatest number of all 4 users")
elif(user4>user1 and user4>user2 and user4>user3):
    print("User4 has entered the greatest number of all 4 users")
else:
    print("They all have entered equal numbers")


# Write a program to find out weather a student has passed or fail, if teh total percentage is above 
# 40% and requires 33% in every subject .Assume three subjects and take marks as input from the user.

