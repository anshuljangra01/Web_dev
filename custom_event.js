// const EventEmitter = require('events');
// const event = new EventEmitter();

// // Create custom event (listener)
// event.on('myEvent', () => {
//     console.log("Custom event triggered");
// });

// // Trigger custom event
// event.emit('myEvent');


const EventEmitter = require('events');
const event = new EventEmitter();

event.on('userLogin', (name) => {
    console.log(`${name} logged in`);
});

event.emit('userLogin', 'Anshul');

