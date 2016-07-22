//eventEmitter

var events = require('events');
var eventEmitter = new events.EventEmitter();

//liseter#1
var listener1 = function listener1(){
  console.log("listener1 executed...");
}

//listener2
var listener2 = function listener2(){
  console.log("listener 2 executed...")
}


//bind the connection event with the listener1 function
eventEmitter.addListener('connection', listener1);

//bind the connection event with the listener2 function
eventEmitter.addListener('connection', listener2);

console.log(require('events').EventEmitter.listenerCount(eventEmitter, 'connection') +
            " listener(s) listening to connection event");
//fire event
eventEmitter.emit('connection');

//remove listener1
eventEmitter.removeListener('connection', listener1);
eventEmitter.emit('connection'); //fire event

console.log(require('events').EventEmitter.listenerCount(eventEmitter, 'connection') +
            " listener(s) listening to connection event");

console.log("Program ended.")
