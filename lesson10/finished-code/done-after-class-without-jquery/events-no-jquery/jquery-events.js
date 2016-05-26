// We'll need a helper function to turn collections 
// that get returned from DOM API functions into arrays:

function toArray(nodeList) {
  var arr = [];
  for (var i = 0; i < nodeList.length; i++) {
    arr.push(nodeList[i]);
  }
  return arr;
}

// Note: `window.onload` is not the same thing 
// as jQuery's `$(document).ready`, but it's close.

window.onload = function() {

  // equivalent of jQuery: siblings & animate

  var animals = toArray(document.querySelectorAll('.animal'));

  animals.forEach(function(animal) {
    animal.onclick = function(event) {
      // event.stopPropagation();
      var el = event.target;
      // Using CSS transitions for this. Not going to get the
      // different timing on getting bigger and getting smaller
      // that we had in the jQuery code.
      el.classList.add('big');
      // remove `big` class from all of `el`'s siblings
      toArray(el.parentNode.children).forEach(function(child) {
        if (child !== el) {
          child.classList.remove('big');
        }
      });
    }
  });

  // jQuery equivalent: addClass and removeClass
  // events: mouseenter and mouseleave

  animals.forEach(function(animal) {
    animal.onmouseenter = function(event) {
      event.target.classList.add('pink-me');
    }
  });

  animals.forEach(function(animal) {
    animal.onmouseleave = function(event) {
      event.target.classList.remove('pink-me');
    }
  });


  // jQuery equivalent: fadeOut and fadein
  // events: dblclick

  var truckList = document.createElement('ul');
  truckList.innerHTML = '<li class="truck">Tonka</li>' +
                        '<li class="truck">Monster</li>' +
                        '<li class="truck">Pickup</li>';

  document.body.appendChild(truckList);

  var trucks = toArray(document.querySelectorAll('.truck'));

  trucks.forEach(function(truck) {
    truck.ondblclick = function(event) {
      var el = event.target;
      // Once again, using CSS transition, along 
      // with JS setTimeout, to accomplish
      // what the jQuery code accomplishes
      el.classList.add('fade');
      setTimeout(function() {
        el.classList.remove('fade');
      }, 2000);
    }
  });

  // jQuery equivalent: find and slideUp

  var fruitList = document.createElement('ul');
  fruitList.innerHTML = '<li>dragonfruit</li>' +
                        '<li>milkapple</li>' +
                        '<li>longan</li>';

  document.body.appendChild(fruitList);

  var fruits = toArray(fruitList.querySelectorAll('li'));

  fruits.forEach(function(fruit) {
    fruit.classList.add('fruit');
    fruit.onclick = function(event) {
      // CSS transitions again
      event.target.classList.add('slide-up');
    };
  });

  // What's this next part going to cause if you
  // uncomment it? How will you then prevent the animals
  // from disappearing when you click them? (Hint: uncomment
  // line 23.)

  // var uls = toArray(document.querySelectorAll('ul'));

  // uls.forEach(function(ul) {
  //   ul.onclick = function(event) {
  //     // currentTarget is the ul, not any lis
  //     // below it.
  //     event.currentTarget.classList.add('slide-up');
  //   }
  // });

};












