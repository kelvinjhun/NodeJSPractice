//Streams.js
//Practice for file Streams
var fs = require("fs");
var data = "";

//create readable stream
var readStream = fs.createReadStream("input.txt");
//set encoding to ascii
readStream.setEncoding("ascii");

//Handle stream events
//data reading
//parameters - chunck (chunk of data being read at filestream)
readStream.on("data", function(chunk){
  data += chunk;
});
//data end
readStream.on("end", function(){
  console.log(data + "\n");
  console.log("end of file has reached");
});
//data error
readStream.on("error", function(err){
  console.log(err.stack);
});
//writing to streams
var writeStream = fs.createWriteStream("output.txt");
data = "This is a test for writing to file stream...";
//write into the stream
writeStream.write(data, "ascii");
writeStream.end(); //end of writing to filestream

//handle event when file has ended writing
writeStream.on("finish", function(){
    console.log("finished writing to output.txt");
});

//error event
writeStream.on("error", function(err){
    console.log(err.stack);
});
//piping streams
pipeStream_func(fs);
//chaining streams
chainStream_func(fs);
console.log("Program streams ended...")

function pipeStream_func(fs){
   var pipeReadStream = fs.createReadStream("input.txt");
   var pipeWriteStream = fs.createWriteStream("output.txt");
   pipeReadStream.pipe(pipeWriteStream);
   console.log("End of function pipeStream_func()");
}

function chainStream_func(fs){
    var zlib = require("zlib");

    //compress file input.txt to input.txt.gz
    fs.createReadStream("input.txt")
      .pipe(zlib.createGzip())
      .pipe(fs.createWriteStream("input.txt.gz"));

    console.log("File compressed...")

    //decompress file

    fs.createReadStream("input.txt.gz")
      .pipe(zlib.createGunzip())
      .pipe(fs.createWriteStream("inputChain.txt"));

    console.log ("File decompressed");

}
