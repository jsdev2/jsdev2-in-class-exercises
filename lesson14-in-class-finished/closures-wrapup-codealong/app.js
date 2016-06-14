// Private variables example

// function carFactory(kind) {
//   var wheelCount = 4;
//   var start = function() {
//     console.log('started the ' + wheelCount + ' wheel ' + kind + '.')
//   };

//   return {
//     startEngine: start
//   }
// }

// var car = carFactory('Delorean');

// car.startEngine();
// => started the 4 wheel Delorean.


// An example of the module pattern:

var car = (function(kind) {
  var wheelCount = 4;
  var start = function() {
    console.log('started the ' + wheelCount + ' wheel ' + kind + '.')
  };
  
  return {
    startEngine: start
  }
})('Delorean');

car.startEngine();
// => started the 4 wheel Delorean.




