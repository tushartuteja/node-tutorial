var fs=require('fs');
var bufferObject=fs.readFileSync(process.argv[2]);
var newArray=bufferObject.toString().split('\n');
console.log( newArray.length-1);
;

