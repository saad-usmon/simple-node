const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const eventEmitter = new MyEmitter();

eventEmitter.on("hello", () => {
  console.log("Hello, World!");
});

eventEmitter.emit("hello");
eventEmitter.emit("hello");
