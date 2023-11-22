// Practice questions for Asynchronous programming

// Question number - 01
// Explain the concept of asynchronous programming in Node.js. Why is it essential for building scalable applications?


/* 
* Non-blocking I/O => Asynchronous programming prevents the event loop from being blocked by time-consuming 
 I/O operations. This means that the server can efficiently handle multiple concurrent requests without getting bogged down by slow 
 I/O operations. This is crucial for building applications that can handle high levels of concurrent traffic.
 
* Improved performance => By avoiding unnecessary waiting time, Node.js can utilize the available CPU resources more effectively. 
 Asynchronous programming allows applications to process multiple tasks concurrently, leading to better performance and reduced response times.

* Real-time applications => Asynchronous programming is vital for building real-time applications, such as chat applications, online gaming, 
 or collaborative tools. These applications require handling many concurrent connections and events, which can be efficiently managed
  through asynchronous techniques.

* Resource efficiency => Asynchronous programming allows Node.js to scale efficiently because it doesn't require creating a new thread
   for each new request. Instead, it uses a single-threaded event loop that can efficiently manage multiple asynchronous operations concurrently.
 */

//    Examples for question - 01
// Synchronous Programming
const fs = require('fs');

const readFile = fs.readFileSync ('Asynchronous Programming/readfile.txt', 'utf-8')
console.log(readFile)
console.log("finished reading file")

// Asynchronous Programming
fs.readFile('Asynchronous Programming/readfile.txt', 'utf-8', (err, data) =>{
    if(err) throw Error
    console.log(data)
})
console.log("Reading File...")


// Question number - 02
// Compare and contrast callbacks, Promises, and async/await in handling asynchronous operations in Node.js.
/*
Callbacks:

* Callbacks are the oldest and most traditional way of handling asynchronous operations in Node.js.
* With callbacks, you pass a function as an argument to an asynchronous operation, and this function (callback) gets executed
 when the operation is complete or encounters an error.
* The callback pattern can lead to deeply nested code structures known as "callback hell" or "pyramid of doom,"
 making the code hard to read and maintain when handling multiple asynchronous operations.
* Error handling in callbacks can be error-prone, and developers must remember to check for errors in each callback function.


Promises:

* Promises were introduced to mitigate the callback hell problem and provide a more structured way to handle asynchronous operations.
* A Promise represents a future value or error that will be available at some point.
* Promises allow chaining of asynchronous operations using .then() and help keep the code readable and maintainable.
* Error handling is typically centralized using .catch() at the end of the Promise chain.


async/await:

* async/await is built on top of Promises and provides a more synchronous-like way of writing asynchronous code.
* The async keyword is used to define an asynchronous function, and the await keyword is used within that function to pause execution until the Promise is resolved.
* async/await helps to avoid callback hell and allows developers to write asynchronous code in a more linear fashion.
* Error handling is achieved using regular try-catch blocks.
*/


// Question number - 03
// Convert the following callback-based function into a Promise-based function:
/*
 function fetchData(callback) {
  // Simulate fetching data from an API
  setTimeout(() => {
    const data = 'Some data';
    callback(data);
  }, 1000);
}
*/

function fetchData(){
    return new Promise ((resolve, reject) => {
         setTimeout(()=>{
const data = "some data"
resolve(data)
         }, 1000)
    })
}

fetchData()
.then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

// Question num ber - 04
// Write an async function that fetches data from two different APIs simultaneously using Promise.all and returns the combined results.



const fetch = require('node-fetch')

async function fetchTwoAPI(){
    try{
       const api1 = fetch('https://jsonplaceholder.typicode.com/posts')
       const api2 = fetch('https://jsonplaceholder.typicode.com/todos')

       const[api1res, api2res] = await Promise.all([api1, api2])
       
       const data1 = await api1res.json()
       const data2 = await api2res.json()

       return(data1, data2)
    }
    catch(error){
console.log('Error : ' , error.message)
throw new Error
    }
}

fetchTwoAPI()
.then(data => {
    console.log("fetched data : ", data)
})
.catch(error => {
    console.log(error)
})