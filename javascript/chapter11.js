// Advanced concepts of javascript

// Example for IIFE (Immediately Invoked Function Expression)
(function greet() {
    console.log("Good day")
})()

const a = "the"
const b = "on"
const c = { a, b }
console.log(c)

let arr = [1, 2, 3, 4]
console.log(...arr)

function sum(...arr) {
    total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}
console.log(sum(...arr))

// Practice set- 11
// Question number - 01
setTimeout(() => {
    console.log("hello")
    console.log("world")
}, 2000)

// Question number - 02
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9]

function average(...numbers) {
    if (numbers.length === 0) {
        return 0
    }
    let result = numbers.reduce((total, num) => total + num, 0)
    return result / numbers.length
}

console.log(average(...numbers))


// Question number - 03
const resultNValues = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`The Promise was resolved in ${n} seconds`)
        }, n * 1000)
    })
}

// IIFE 
(function () {
    const nValues = [2, 3, 4]

    nValues.forEach(async (n) => {
        try {
            const result = await resultNValues(n)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    })
})()


// Question number - 04
const p = 10000
const t = 2
const r = 12

const simpleIntreset = (p,t,r) => {
    return (p * t * r) /100
}

console.log(simpleIntreset(p,t,r))