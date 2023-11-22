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