$(document).ready(function() {

  // Add click listeners to each li in undelegated list

  $('.not-delegated').on('click', function() {
    alert("Hi, I'm " + $(this).html());
  });

  // Add a click listener to the ul in the delegated list,
  // which listens for events coming from its children lis.

  $('.delegated-ul').on('click', 'li', function() {
    alert("Hi, I'm " + $(this).html());
  });

  // Add a new li in the undelegated list

  $('.not-delegated-ul').append('<li class="not-delegated">extra</li>');

  // Add a new li in the delegated list

  $('.delegated-ul').append('<li class="delegated">extra extra extra</li>');

  // At this point if you click on "extra extra extra", you'll get
  // an alert, but if you click on "extra", you'll get nothing.

});