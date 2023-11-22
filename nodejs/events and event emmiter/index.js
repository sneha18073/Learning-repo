// Events and Event Emitter

// Basic Event Example:

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Listener function for the 'greet' event
const greetListener = () => {
  console.log('Hello, World!');
};

// Attach the listener to the 'greet' event
myEmitter.on('greet', greetListener);

// Emit the 'greet' event
myEmitter.emit('greet'); // Output: Hello, World!


// Passing Data with Events:

const EventEmitter = require('events');

const myEmitter1 = new EventEmitter();

// Listener function for the 'data' event
const dataListener = data => {
  console.log('Received data:', data);
};

// Attach the listener to the 'data' event
myEmitter1.on('data', dataListener);

// Emit the 'data' event with some data
myEmitter1.emit('data', { message: 'Sample data' }); // Output: Received data: { message: 'Sample data' }


// Removing Event Listeners:

const EventEmitter = require('events');

const myEmitter2 = new EventEmitter();

// Listener function for the 'click' event
const clickListener = () => {
  console.log('Button clicked!');
};

// Attach the listener to the 'click' event
myEmitter2.on('click', clickListener);

// Emit the 'click' event
myEmitter2.emit('click'); // Output: Button clicked!

// Remove the 'click' event listener
myEmitter2.removeListener('click', clickListener);

// Emit the 'click' event again, but the listener is no longer attached
myEmitter2.emit('click'); // No output, as there are no listeners for the 'click' event
