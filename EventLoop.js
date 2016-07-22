//Sample of EventLoop
var events = require('events');
var eventEmitter = new events.EventEmitter();

//creating an event handler
var connectHandler = function connected(){

  console.log("connection successful");
  //fire data received event
  eventEmitter.emit('data_received');
}

//binding event and event handler
eventEmitter.on('connection', connectHandler);

//bind the data_received event with anonymous function
eventEmitter.on('data_received', function(){
  console.log('data received successfully');
});

//fire connection event
eventEmitter.emit('connection');
console.log("Program ended.");
