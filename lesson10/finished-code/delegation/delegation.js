$(document).ready(function() {

  $('.not-delegated').on('click', function() {
    alert("Hi, I'm " + $(this).html());
  });

  $('.delegated-ul').on('click', 'li', function() {
    alert("Hi, I'm " + $(this).html());
  });

  $('.not-delegated-ul').append('<li class="not-delegated">extra</li>');
  $('.delegated-ul').append('<li class="delegated">extra extra extra</li>');

  // At this point if you click on "extra extra extra", you'll get
  // an alert, but if you click on "extra", you'll get nothing.

});