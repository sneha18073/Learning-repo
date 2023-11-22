// Array
// Array methods
//1. Pop = removes the last element in an array --> Updates the original array(prints the poped element)
//2. Push = adds an element at the end of the array --> Modifies the original array(returns the new array length)
//3. Shift = removes first element and returns it --> Updates the original array(returns the element that is removed)
//4. Unshift = adds an element to the starting of the array --> Updates the original array(returns the new array length)
//5. Delete = deletes the element in the array
//6. Concat = combines two arrays --> Returns new array(Does not update the original array)
//7. Sort = sorts the array alphabetically --> Modifies the original array
// (if the first argument is the additional compare function then those values are considered)
//8. Splice = Used to add new elements to the array --> modifies the original array(returns the deleted array)
//9. Slice = slice a piece of an array --> Returns a new array
//10. Reverse = reversese the elements in the source array

// Example using splice array method
const arr = [12, 34, 56, 56]
let new_arr = arr.splice(1, 2, 73, 91) //.splice(position of the element to be added, number of elements to remove, elements to add)
console.log(new_arr)


// Looping through Array
// Examples of for Each Array
arr.forEach(number => {
    console.log(number)
})

// Example for map method in array
let multiply = arr.map(number => number * 2)
console.log(multiply)

// Examples for filter method in array
let filtermethod = arr.filter(number => number%2==0)
console.log(filtermethod)

// Examples for reduce method in array
const maxNumber = arr.reduce((max, currentNumber) => {
    if(currentNumber > max){
        return currentNumber
    }
    return max
},arr[0])
console.log(maxNumber)


// Example for Array.form method
const char = "Hello World"
console.log(Array.from(char))


