const events = require("events");

const eventEmitter = new events.EventEmitter();

//creating an event handler to trigger once the event has been fired
const eventHandler = function () {
  console.log("Event has been handled");
};

// when the server detects "event" eventHandler runs
eventEmitter.on("event", eventHandler);

//Fires 'event'
eventEmitter.emit("event");
