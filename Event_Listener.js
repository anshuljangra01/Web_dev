// // Alice 
// const EventEmitter = require('events');

// // Create an instance of EventEmitter
// const eventEmitter = new EventEmitter();

// // Register an event listener
// eventEmitter.on('greet', (name) => {
//     console.log(`Hello, ${name}!`);
// });

// // Emit the event
// eventEmitter.emit('greet', 'Anshul');

// --------- Inheriting Events-----------

const EventEmitter = require('events');

// Create a custom class that extends EventEmitter
class MyEmitter extends EventEmitter {
    logMessage(msg) {
        console.log(msg);
        this.emit('logged', msg);
    }
}

// Create an instance of the custom class
const myEmitter = new MyEmitter();

// Register a listener for the 'logged' event
myEmitter.on('logged', (msg) => {
    console.log(`Logged message: ${msg}`);
});

// Call a method that emits an event
myEmitter.logMessage('Hello, Node.js!');
