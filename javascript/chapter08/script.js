// Events and Other DOM manipulation

// innerhtml --> HTML inside the element
// outerhtml --> HTML inside + element itself

// Hidden Attribite --> Shows the element is hidden or not


// Different Attributes

// Element.hasAttribute (name)--> check for the existance of the attribute
// Element.getAttribute (name) --> To get the attribute 
// Element.setAttribute (name, value) --> to set the specific attribute
// Element.removeAttribute (name) --> To remove any attribute
// Element.Attribute --> To check all the attributes of an element
// data_attribute --> custom attribute (available had ex. --> data_one => element.dataset.one)


// Insertion methods 
// Node.append, prepend, before, after, relacewith(e)

// Insert adjacent html/text/element
// beforebegin, afterbegin, beforeend, afterend

// node.removal() --> to remove a node

// className and ClassList


// Settimeout and setinterval

// Browser events

// AddEventListner and RemoveEventListener



// Practice set - 08
// Question number - 01
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
// console.log(btn1)
const handleBtn1 = () => {
    alert("You clicked button 1")
}
btn1.addEventListener("click", handleBtn1)

btn2.addEventListener("click", () => {
    alert("You clicked button 2")
})


// Question number - 02
const createBookMarks = (name, url) =>{
// create an anchor element 
let link = document.createElement('a')

// Set the href attribute
link.href = url

// Set the text attribute
link.textContent = name

// Append the bookmark to the body
document.body.appendChild(link)

// Add a line break
document.body.appendChild(document.createElement('br'))
}

createBookMarks('google', 'https://www.google.com/')



// Question number - 03
const fetchData = () => {
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => response.json())
   .then(data => {
       console.log(data)
   })
   .then(error => {
    console.error(error)
   })
}

// fetchData()

// setInterval(fetchData, 5000)


// Question number - 04

let lightBulb = document.querySelector('.lightBulb')

setInterval(() => {
     lightBulb.classList.toggle('lightBulb')
},1000)