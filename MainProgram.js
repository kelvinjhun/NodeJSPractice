/*
Required framework module
*/
//var requiredModules = require('./RequiredModules');
//var callBacks = require('./CallbackConcept');
//var eventLoops = require('./EventLoop');
//var eventEmitter = require('./EventEmitter');
//var buffers = require('./Buffers');
var streams = require('./Streams');
var http = require ("http");

http.createServer(function(request, response)
{
  response.writeHead(200, {'Content-type': 'text/plain'});
  response.end('Testing request \n');

}).listen(8081);

//console.log('Server running at http://127.0.0.1:8081/');
