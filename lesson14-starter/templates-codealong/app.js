// Module pattern/closures exercise

// `ids` is an object with one method, `.next()`, 
// which gives you a new unique id every time you 
// run it: first 1, then 2, then 3, etc.

// Fill in the code where it says "What goes here?"

var ids = (function() {

  // What goes here?

  return {
    next: nextId
  };
})();

console.log(ids.next());
// => 1

console.log(ids.next());
// => 2

console.log(ids.next());
// => 3