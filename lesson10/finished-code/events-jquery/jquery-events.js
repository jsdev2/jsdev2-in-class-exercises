$(document).ready(function() {

  // jQuery: siblings & animate

  var $animals = $('.animal');

  $animals.on('click', function(event) {
    // event.stopPropagation();
    $(this).animate({"font-size": "50px"}, 500);
    $(this).siblings().animate({"font-size": "30px"}, 250);
  });


  // jQuery: addClass and removeClass
  // events: mouseenter and mouseleave

  $animals.on('mouseenter', function(event) {
    $(this).addClass('pink-me');
  });

  $animals.on('mouseleave', function(event) {
    $(this).removeClass('pink-me');
  });


  // jQuery: fadeOut and fadein
  // events: dblclick

  var $truckList = $('<ul>')
      .append('<li class="truck">Tonka</li>')
      .append('<li class="truck">Monster</li>')
      .append('<li class="truck">Pickup</li>');

  $('body').append($truckList);
  
  $('.truck').on('dblclick', function(event) {
    $(this).fadeOut(2000, function() {
      $(this).fadeIn(2000);
    });
  });

  // jQuery: find and slideUp

  var $fruitList = $('<ul>')
      .append('<li>dragonfruit</li>')
      .append('<li>milkapple</li>')
      .append('<li>longan</li>');

  $fruitList.find('li').addClass('fruit');

  $('body').append($fruitList);

  $('.fruit').on('click', function(event) {
    $(this).slideUp(1000);
  });

  // What's this next part going to cause if you
  // uncomment it? How will you then prevent the animals
  // from disappearing when you click them? (Hint: uncomment
  // line 8.)

  // $('ul').on('click', function(event) {
  //   $(this).slideUp(3000);
  // });

});












