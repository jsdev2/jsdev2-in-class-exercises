/* DOM Manipulation: Independent Practice

- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/

function addToList(list, myNewThing) {
  // alert(list);
  // alert(myNewThing);
  var newLi = document.createElement('li');
  var newText = document.createTextNode(myNewThing);

  newLi.appendChild(newText);
  list.appendChild(newLi);

}

window.onload = function() {
  // when someone clicks the button...
  var button = document.getElementById('new-thing-button');
  var newThingInput = document.getElementById('new-thing');
  var thingList = document.getElementById('fav-list');

  button.onclick = function(event) {
    event.preventDefault();
    var newThing = newThingInput.value;
    addToList(thingList, newThing);
    newThingInput.value = '';
    
  };
};

/*

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"
(Hint: the `value` property of the input box, before anyone types in it,
is the empty string.)


*/


