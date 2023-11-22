// Practice set - 06

// Question number - 01
let age = prompt("Enter your age")

if(age>18){
    alert("You can drive")
}else{
    alert("YOu cannot drive")
}

// Question number - 02
if(age){
    confirm("Want to see the prompt again")
    if(age>18){
        alert("You can drive")
    }else{
        alert("YOu cannot drive")
    }
}else{
alert("You did not enter your age")
}


// Question number - 03
if(age<0){
    console.error("Age cannot be negative")
}else{
    console.log("YOu have entered your age")
}


// Question number - 04

let num = prompt("Enter a number")

if(num >= 5){
    window.location.href = "https://github.com/"
}
else{
    alert("You have entered a number lower than expected")
}


// Question number - 05

let color = prompt("Enter the blackground color you want")
if(color){
    document.body.style.backgroundColor = color
}else{
    alert("no color entered")
}