#Lists and Tuples
#Lists => ex. ["sneha", 7, true,23.00] ==> Mutable
#Tuples => ex. (1,) One element is a tuple should have a comma after the element
#* Tuple => ex. (1,7,2) ==> Immutable


#Practice set - 04
#Write a python program to make a list of fruits taken as an input from the user
fruit1 = input("Enter you favrouite fruit 1 ")
fruit2 = input("Enter you favrouite fruit 2 ")
fruit3 = input("Enter you favrouite fruit 3 ")
fruit4 = input("Enter you favrouite fruit 4 ")
fruit5 = input("Enter you favrouite fruit 5 ")

fruits = [fruit1, fruit2, fruit3, fruit4, fruit5]
print(fruits)


#Write a program to accept the marks of 6 students and display in a sorted manner
student1 = input("Enter you total score for 100 ")
student2 = input("Enter you total score for 100 ")
student3 = input("Enter you total score for 100 ")
student4 = input("Enter you total score for 100 ")
student5 = input("Enter you total score for 100 ")
student6 = input("Enter you total score for 100 ")

marks = [student1, student2, student3, student4, student5, student6]
marks = sorted(marks)
print(marks)

#check that a tuple cannot be changed in python
'''a = (1,7,9,10)
print(a.pop(2))
'''

#Write a program to sum a list of 4 numbers
lists = [12,40,50,100]
print(lists[0]+lists[1]+lists[2]+lists[3])


#Write a program to count the number of zeros in the tuple
a1 = (7,0,8,0,0,9)
print(a1.count(0))