// Non - Blocking I/O 
 const fs =require('fs');
fs.readFile("text.txt", () => {
  console.log("File read");
});
console.log("Done");

//  Event- Driven Architecture
const EventEmitter = require('events');

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Register a listener for the "click" event
emitter.on("click", () => {
  console.log("Clicked!");
});

// Emit the "click" event
emitter.emit("click");
