//CallbackConcept.js
var fs = require("fs");

/*Blocking Code sample
var data = fs.readFileSync("input.txt");

console.log("Start of CallBackConcept");
console.log(data.toString());
console.log("Program Ended");
*/

//Non-blocking code sample

fs.readFile("input.txt", function (err, data){
  if(err)
    return console.error(err);
  console.log(data.toString());
});

console.log("Program Ended");
