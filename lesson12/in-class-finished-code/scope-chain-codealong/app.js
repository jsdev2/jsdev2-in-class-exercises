function outer() {
  var myOuter = "outerVar";

  function firstInner() {
    var myFirstInner = "firstInnerVar";
    console.log(myOuter);
    console.log(myFirstInner);
  }

  function secondInner() {
    var mySecondInner = "secondInnerVar";
    console.log(myOuter);
    console.log(mySecondInner);
    console.log(myFirstInner);
  }

  firstInner();
  secondInner();

  console.log(myOuter);
  console.log(myFirstInner);
  console.log(mySecondInner);
}

outer(); 

// => outerVar
// => firstInnerVar

// => outerVar
// => secondInnerVar
// => Reference error: myFirstInner is not defined.

// => outerVar
// => Reference error: myFirstInner is not defined.
// => Reference error: mySecondInner is not defined.