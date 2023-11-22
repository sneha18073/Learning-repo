// Promises , CallBacks and Async/Await

// Callbacks 
// Example - 01

const greet = (name, callback) =>{
    console.log(`hello ${name}`)
    
    // A function is invoked
    callback()
}

const saygoodbye = ()=>{
    console.log("GoodBye!")
}

greet("Sneha", saygoodbye)


// Example - 02
// function loadScript (src, callback) {
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = callback()
// }

// const script = () => {
//     console.log("Script is loaded")
//     console.log(script.src)
// }

// loadScript('https://github.com/', script)



// Example for error handling in callback function
// function loadScript (src, callback) {
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = () => callback(null, script)
//     script.onerror = () => callback(new Error ('failed'))
// }

// const script = () => {
//     console.log("Script is loaded")
//     console.log(script.src)
// }

// loadScript('https://github.com/', (error, script) => {
//     if(error){
//         console.log("Handling error")
//     }
//     else{
//         console.log("script loaded")
//     }
// })


// Example of Promises
function fetchData() {
    return new Promise ((resolve, reject) => {
       setTimeout(() =>{
        const data = {id:1, name: "Sneha"}
        resolve(data)
       },2000)
    }) 
}

fetchData().then(data =>{
  console.log("Fetched data : " + data)
}).then(error => {
    console.log(new Error ("There is some error fetching data, try again after some time"))
})


// Example 02 for promises
// function loadScript(src) {
//     return new Promise ((resolve, reject) =>{
//         let script = document.createElement('script')
//         script.src = src

//         resolve(script)
//     })
// }

// loadScript('https://github.com/')
// .then(script =>{
//     console.log("The script is loaded")
// })
// .then(error => {
//     console.log(new Error("Script Loading Failed"))
// })


//example Promise Chaining

function fetchData(){
    return new Promise ((resolve,reject) =>{
        const data = {id: 2, name : "sneha"}
        resolve(data)
    })
}

function processedData(data) {
    return new Promise ((resolve, reject) => {
        const processedData = `${data.name} is processed`
        resolve(processedData)
    })
}

fetchData()
.then(data => {
    console.log("the data is fetched : " ,data)
    return processedData(data)
})
.then(processedData => {
    console.log(`The data is processed`, processedData)
})
.catch(error => {
    console.log(new Error(error.message))
})

// Attaching multiple handlers
const promise = fetchData()
promise.then(data => {
    console.log("Handler 01 : ", data)
})
promise.then(data => {
    console.log("Handler 02 : ", data)
})
promise.catch(error => {
    console.log(new Error(error.message))
})



// Promise API
// Promise.all
const Promise1 = Promise.resolve(1)
const Promise2 = Promise.resolve(2)
const Promise3 = Promise.resolve(3)

Promise.all([Promise1, Promise2, Promise3])
.then(value => {
    console.log(value)
})
.catch(error => {
    console.log(new Error('ERROR'))
})


// Promise.race
const promise1 = new Promise((resolve, reject) => {
    setTimeout(()=>{resolve, 1000, "promise 1 is resolved"})
})

const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {reject, 500, new Error("promise 2 is rejected")})
})

Promise.race([promise1, promise2])
.then(result => {
    console.log(result)
})
.catch(error => {
    console.log(error.message)
})



// Example Async/Await
function fetchData() {
    return new Promise((resolve, reject) => {
        const data = {id: 1, name: "sneha"}
        resolve(data)
    })
}

async function getData(){
    try{
        const data = await fetchData()
        console.log("Data Fetched ", data)
    }
    catch{
        throw new Error("Failed to fetch data")
    }
}

getData()



