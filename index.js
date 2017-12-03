"use strict";

var input = [];

readline_object.on("line", (value) => { //Read input values
	input.push(value);
})
//Call ContestResponse when all inputs are red
readline_object.on("close", ContestResponse); 

String.prototype.i = function() {
  return parseInt(this, 10);
}

String.prototype.f = function() {
  return parseFloat(this)
}

function pr(i) {
  if (Array.isArray(i)) {
    LocalPrintArray( i ); 
  } else {
    LocalPrint( i ); 
  }
}

function ContestResponse(){
  const n = input.shift().i()
  //const m = input.shift()
  //const last = input.pop()
  //input.
  
}


