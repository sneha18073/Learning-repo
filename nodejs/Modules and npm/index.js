// Modules and npm

// mathUtils.js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;

// app.js
const mathUtils = require('./mathUtils');

console.log(mathUtils.add(5, 3)); // Output: 8
console.log(mathUtils.subtract(10, 5)); // Output: 5


// # Install the `lodash` package
// npm install lodash


// app.js
const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];
const sum = _.sum(numbers);
console.log(sum); // Output: 15


// package.json
// {
//     "name": "my-app",
//     "version": "1.0.0",
//     "scripts": {
//       "start": "node app.js",
//       "test": "mocha test.js"
//     },
//     "dependencies": {
//       "lodash": "^4.17.21"
//     }
//   }
  

