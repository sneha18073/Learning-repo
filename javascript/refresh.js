  // Loops practice
  // For Loop example
  
  for(let i=0; i<10; i++){
    console.log(i)
  }

//   While loop 
let i = 0
while(i<10){
    console.log(i)
    i++
}


// Do while loop
let k = 5
do{
    console.log(k)
    i++
}while(k >6)

// for in loop
const obj = {
    name : 'Sneha',
    age : 20
}

for (let key in obj){
    console.log(key, obj[key])
}
 
// for of loop   // I terable only in array and not in objects
let arr = [1, 2, 3, 4]
for (let ofObj of arr){
    console.log(ofObj)
}


// foreach loop
arr.forEach(function(arrr){
   console.log(arrr)
})


// map array

const multiply = arr.map(function(multi){
    return multi * 2
})
console.log(multiply)

// Declare a variable x and assign it the value 5.
const x5 = 5;
// Declare a variable x and assign it the value 5. ==> Strings, Symbols, Numbers, Null, Undefined, Bollean, BYtes

// Explain the difference between == and ===.   ===> == is equvivalent to the value of the variable and === is also equivalent to the variable value and also the datatype is the same.

// Write an example of a ternary operator.
let age = prompt('Enter your age')
const canVote = age > 18 ? "You are eligible to vote" : "You are not eligible to vote"

// Write a for loop that prints numbers 1 to 5.
for(let i = 0; i<5; 1++){
    console.log(i)
}

if(age > 18){
    console.log("Please vote and claim your right to kick yourself")
}else{
    console.log("You are not eligible to kick yourself")
}



