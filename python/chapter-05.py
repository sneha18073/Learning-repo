#Dictionaries and sets
#Dictionaries => unordered, indexed and mutable(similar to objects in javasript)
# Sets => unrodered, unindexed and immutable, non-repitative
#Can perform all the set functions like uniona nd intersections

#Practice set - 05
# '''Create a dictionary of any local language words and its correspoding traslation and 
# also provide an option for the user to look up'''

lang = {"Yenu" : "What",
        "Howdhu": "Yes",
        "Yake" : "Why",
        "Yavaga": "When",
        "Yenge" : "How"
}

user = input("Enter the word you want translated: ")
print(lang[user])

'''Write  program to allow the user to enter 8 number and display all the unique numbers once'''
numbers_str = input("Enter random 8 numbers: ")
numbers_int = numbers_str.split()
numbers = [int(num) for num in numbers_int]
unique_numbers = set(numbers)
print(unique_numbers)


'''Can we have a set with 18 as an int and "18" as a string'''
example = {"18", 18}
print(example)


'''What will be the length of the set after the following operations'''
S = set()
S.add(20)
S.add('20')
S.add(20.0)
print(len(S))



'''What is the type of S1'''
S1 ={}
print(type(S1))

'''Create an empty dictionary and ask 4 friends to enter their favrouite language as value and take their names 
as the key and make sure the names are unique'''
dict = {}
name1 = input("Enter you name: ")
fav_lang1 = input("Enter your favrouite language: ")
dict[name1] = fav_lang1

name2 = input("Enter your name: ")
fav_lang2 = input("Enter your favrouite language: ")
dict[name2] = fav_lang2

name3 = input("Enter your name: ")
fav_lang3 = input("Enter your favrouite language: ")
dict[name3] = fav_lang3

name4 = input("Enter your name: ")
fav_lang4 = input("Enter your favrouite language: ")
dict[name4] = fav_lang4

for name, fav_lang in dict.items():
    print(f"{name} : {fav_lang}")


