//buffers are just like strings
//Creating buffers
var buff = new Buffer(256);
var len = buff.write("Simple Text here");

console.log(buff.toString("ascii", 0,10));
console.log("Octets written: " +len);

//convert to json
var buff2 = new Buffer("\nHello, this is a new text...")
console.log("converting to jSon...");
var json = buff2.toJSON(buff2);
console.log(json);

//concatinating buffers
console.log("Concatinated strings: "+Buffer.concat([buff, buff2]))
