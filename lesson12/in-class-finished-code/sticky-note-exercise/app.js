$(document).ready(function() {

  // Wrap DOM elements that aren't going to change 
  // in jQuery objects now, so we don't have to find 
  // them every time somebody clicks.
  var $container = $('.container');
  var $stickyMessageInput = $('.box-message-input');
  var $stickyColorInput = $('.box-color-input');

  var noteCount = 1; // inital value

  $('.box-creator-button').on('click', function() {

    // We have to do this inside the click handler, because
    // it has to happen every time someone clicks.
    // If we did it outside this function, there would be 
    // only one box.
    var $stickyNote = $('<div></div>').addClass('box');

    // Get the color and the note from the user
    var stickyMessage = $stickyMessageInput.val();
    var stickyColor = $stickyColorInput.val();

    // Clear out the inputs after we grab the values
    $stickyMessageInput.val('');
    $stickyColorInput.val('');

    // Add the note to the DOM, with the right color
    $stickyNote.css({"background-color": stickyColor});
    $stickyNote.html(noteCount + '. ' + stickyMessage);
    $container.append($stickyNote);

    // Bump up the note count
    noteCount = noteCount + 1;

  });
});