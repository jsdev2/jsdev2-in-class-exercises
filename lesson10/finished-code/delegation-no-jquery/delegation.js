// Note: `window.onload` is not the same thing 
// as jQuery's `$(document).ready`, but it's close.
window.onload = function() {

  // Add click listeners to each li in undelegated list

  var undelegatedLis = document.querySelectorAll('.not-delegated');
  for (var i = 0; i < undelegatedLis.length; i++) {
    undelegatedLis[i].onclick = function(event) {
      alert("Hi, I'm " + this.innerHTML);
    };
  }

  // Add a click listener to the ul in the delegated list,
  // which listens for events coming from its children lis.

  document.querySelector('.delegated-ul').onclick = function(event) {
    if (event.target.matches('.delegated-ul li')) {
      alert("Hi, I'm " + event.target.innerHTML);
    }
  };

  // Add a new li in the undelegated list

  var newUndelegatedLi = document.createElement('li');
  newUndelegatedLi.classList.add('not-delegated');
  newUndelegatedLi.innerHTML = 'extra';
  document.querySelector('.not-delegated-ul').appendChild(newUndelegatedLi);

  // Add a new li in the delegated list

  var newDelegatedLi = document.createElement('li');
  newUndelegatedLi.classList.add('delegated');
  newDelegatedLi.innerHTML = 'extra extra extra';
  document.querySelector('.delegated-ul').appendChild(newDelegatedLi);

  // At this point if you click on "extra extra extra", you'll get
  // an alert, but if you click on "extra", you'll get nothing.

};
