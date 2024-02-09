#Strings
#Most widely used string types or manipulators

#Practice set -01
#Write a python program to return "Good Morning" along with the name which is taken as an input from the user

name = input("Enter you name ")
output = print(name + " Good Morning!")

#Write a python program to fill in the template

name1 = input("Enter your name ")
date1 = input("Enter the date you wish to send the letter")
letter = "{name1} You have been selected {date1}"
letter = letter.replace("{name1}", name1).replace("{date1}", date1)
print(letter)

#Write a python program to detect doule spaces in the given string

word = "It is a  nice warm  sunny  day"

double_spaces = word.count("  ")
print(double_spaces)


#Write a python program to replace the double spaces in problem above with single spaces
single_spaces = word.replace("  "," ")
print(single_spaces)


#Write a program to formate the following letters using escape sequences
letter1 = "Dear Abc,This python program is nice,thanks!"
letter1 = "Dear Abc,\nThis python program is nice,\nThanks!"
print(letter1)