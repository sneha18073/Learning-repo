// Strings

// Practice set - 04

// Question number - 01
const try1 = "Harr\""
console.log(try1)

// Question number - 02
const exp = "String is Immutable"
console.log(exp.includes("is"))
console.log(exp.startsWith("string"))
console.log(exp.endsWith("Immutable"))

// Question number - 03
let lowerc = "Sneha"
console.log(lowerc.toUpperCase())

// Question number - 04
const stat = "Please give Rs 1000"
console.log(stat.length)
let result = stat.slice(15)
console.log(result)

// Question number - 05
let name = "Sneha"
name[3] = "g"
console.log(name) // nOt able to change the character of the string since it is immutable