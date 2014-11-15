var fs=require('fs');
var datacollect=function callback(err,data){
};
var bufferObject=fs.fs.readFile(process.argv[2],datacollect);
var newArray=bufferObject.toString().split('\n');
console.log( newArray.length-1);
;

