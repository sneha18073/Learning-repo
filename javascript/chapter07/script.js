// Walking the DOM
// Pactice set - 07

// Question number - 01
let changecolor = document.querySelector('.navbar:first-child')
// changecolor.style.color = "red"


// Question number - 03
let parentElement = document.querySelector('.parent-element')
// console.log(parentElement)
let children = parentElement.children
// console.log(children)

children[0].style.color = "green"
children[children.length -1].style.color = "green"


// Question number - 04
var liElements = document.querySelectorAll('#list li');

liElements.forEach(function(li) {
  li.style.backgroundColor = 'blue';
});
