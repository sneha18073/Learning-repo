// Loops and Functions
// Example of for loop

// Listing number sfrom 1 to 10
for(let i=0; i<=10; i++){
    console.log(i)
}

// Computing the sum of the consecutive numbers
let sum = 0
for(let i=1; i<=10; i++){
    sum += i
}
console.log(sum)

// Iterating over an array

const arr = [1, 23, 34, 45, 56]
for(i=0; i<arr.length; i++){
    console.log(arr[i])
}


// Examples for for in loop
// Iterating through an object
const obj = {
    name: "xyz",
    age: 100,
    place: "Earth"
}
for(let keys in obj){
    console.log(`${keys} : ${obj[keys]}`)
}

// Iterating through an array
for (let num in arr){
    console.log(arr[num])
}


// Examples i for off loop
// Iterating through an array
let fruits = ["apple", "orange", "mango"]
for(let fruit of fruits){
    console.log(fruit)
}

const str = "Hello World"
for(let char of str){
    console.log(char)
}


// Examples of While Loop
// Printing numbers from 1 t0 10
let count = 0
while(count < 10){
    count++
 console.log(count)
}


// Computing addition of consecutive numbers
let sum1 = 0
let num1 = 0
while(num1 > 10){
    sum += num
}
console.log(sum)



// Example for do while loop
// Printing numbers from 1 to 10
let nu2 = 0
do{
    nu2++
    console.log(nu2)
}while(nu2 < 10)



// Practice set - 03
// Question number - 01
let prac_obj = {
    rohan : 98,
    harry : 70,
    shubham : 87
}

for(let keys in prac_obj){
    console.log(`${keys} : ${prac_obj[keys]}`)
}


// Question number - 02
let keys = Object.keys(prac_obj)
// console.log(keys)
let length = keys.length
// console.log(length)

for(let i=0; i<length; i++){
    let key = keys[i]
    let value = prac_obj[key]
    console.log(`${key} : ${value}`)
}


// Question number - 03
let guess = 0
let secretNumber = Math.floor(Math.random() * 10) + 1
console.log(secretNumber)
while(guess !== secretNumber){
    guess = parseInt(prompt("Enter the secretNumber"))
}
console.log("Congrajulations you have entered the correct number")


// Question number - 04
const meanOf5 = (a, b, c, d, e)=>{
    return (a+b+c+d+e)/5
}
console.log(meanOf5(12,34,57,74,93))