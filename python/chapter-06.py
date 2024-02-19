# # Conditional statements
# # If and else and else if statements 
# # Switch cae statements

# # Write a program to find the greatest number entered by the users
# user1 = input("Enter your secret number: ")
# user1 = int(user1)
# user2 = input("Enter your secret number: ")
# user2 = int(user2)
# user3 = input("Enter your secret number: ")
# user3 = int(user3)
# user4 = input("Enter your secret number: ")
# user4 = int(user4)

# if(user1>user2 and user1>user3 and user1>user4):
#     print("User1 has entered the greatest number of all 4 users")
# elif(user2>user1 and user2>user3 and user2>user4):
#     print("User2 has entered the greatest number of all 4 users")
# elif(user3>user1 and user3>user2 and user3>user4):
#     print("User3 has entered the greatest number of all 4 users")
# elif(user4>user1 and user4>user2 and user4>user3):
#     print("User4 has entered the greatest number of all 4 users")
# else:
#     print("They all have entered equal numbers")


# # Write a program to find out weather a student has passed or fail, if the total percentage is above 
# # 40% and requires 33% in every subject .Assume three subjects and take marks as input from the user.

# sub1 = input("Enter your arks scored in MATH: ")
# sub1 = int(sub1)
# sub2 = input("Enter your arks scored in SCIENCE: ")
# sub2 = int(sub2)
# sub3 = input("Enter your arks scored in ENGLISH: ")
# sub3 = int(sub3)

# if sub1 < 0 and sub1 > 100 or sub2 < 0 and sub2 > 100 or sub3 < 0 and sub3 > 100:
#     print("Marks should be between 0 and 100")
# else:
#     # Check the total percentage and the minimum subject percentage
#     if sub1 < 33 or sub2 < 33 or sub3 < 33:
#         print("Fail")
#     else:
#         total_marks = sub1 + sub2 + sub3
#         percentage = (total_marks/300) * 100
#         if percentage >= 40:
#            print("You have passed successfully")
#         else:
#            print("You have failed miserablay")


# A spam text is detected when the text contains the following words:
# "make a lot of money", "buy now", "subscribe this", "click this". Write a program to find these words and report spam
           
text = input("Enter you received text to ensure weather it's a spam or not: ")
spam_text = ["make a lot of money","buy now", "subscribe this", "click this"]

check_result = print(["This is a spam text" if text.lower() in spam_text.lower() else "This is not spam"] )