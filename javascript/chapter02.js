// Conditionals And Expressions
// Practise set - 02

// Question number - 01
let age = prompt("enter your age")

if (age >= 10 && age <= 20) {
    console.log("You are still a child")
}

// Question number - 02
let Fruits = prompt("Enter your favrouite fruit")
switch (Fruits) {
    case Apple:
        console.log("You Ate an Apple");
        break;
    case Orange:
        console.log("You Ate an Orange");
        break;
}

// Question number - 03
let num = prompt("Enter a number to check weather divisible by 2 and 3")

if(num%2==0 && num%3==0){
    console.log("The number is divisible by both 2 and 3")
}
else if(num%2==0){
    console.log("The number is divisible by 2")
}  
else if(num%3==0){
    console.log("The number is divisible by 3")
}
else{
    console.log("The number is not divisible by either 2 or 3")
}


// Question number - 04
let x = prompt("Enter your age")
if(x>=18){
    console.log("You can drive")
}
else{
    console.log("YOu cannot drive")
}