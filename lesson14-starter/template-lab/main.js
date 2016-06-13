// Template exercise

// Convert this code to use Handlebar templates.

// You will have to do three things in this file:

// 1) Add a model, to hold your initial data
//    (an array containing Dog Bites, Bee Stings and
//    Feeling Bad).

// 2) Change the `addToList` function to use a template
//    instead of a bunch of jQuery code to append stuff
//    to the DOM.

// 3) Have a line in the main part of the code that
//    iterates through your model and populates the 
//    page with the initial three items, by calling 
//    `addToList`.


// At the beginning you will want to set your model.


function addToList($list, thing) {

  // You'll want to change all the code in this function.

  var $thingLi = $('<li>').text(thing);
  var $completeLink = $('<span>').text(' complete task').addClass('complete-task');
  var $deleteLink = $('<span>').text(' delete task').addClass('delete-task');
  $thingLi.append($completeLink).append($deleteLink);
  $list.append($thingLi);

  // End of the code you will have to change

}

$(document).ready(function() {
  
  var $thingList = $('#fav-list');
  var $button = $('#new-thing-button');
  var $newThingInput = $('#new-thing');

  var $thingListItems = $('#fav-list .fav-thing');

  // Here you will want to add some code to iterate through
  // your model and run addToList on all the items.

  // From here down, you won't need to change anything.

  // Complete a task
  $thingList.on('click', '.complete-task', function(event) {
    event.stopPropagation();
    $(this).parent().addClass('completed');
  });

  // Delete a task
  $thingList.on('click', '.delete-task', function(event) {
    $(this).parent().remove();
  });

  // Bold a task when clicked
  $thingList.on('click', '.fav-thing', function(event) {
    $(this).addClass('bold-me');
  });

  $button.on('click', function(event) {
    event.preventDefault();
    var newThing = $newThingInput.val();
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList($thingList, newThing);
      $newThingInput.val('');
    }
  });
});

