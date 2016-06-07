function sayHi() {
  console.log("Hello World");
}

var sayBye = function() {
  console.log("Goodbye world");
}

// 3 kinds of callbacks: one created using a function expression
// that has been assigned to a variable, one created using function
// declaration, and one raw function expression, otherwise known as
// a function literal, otherwise known as an anonymous function. 

setTimeout(sayBye, 5000);

setTimeout(function() {
	console.log("about halfway through");
}, 3000)

setTimeout(sayHi, 1000);


