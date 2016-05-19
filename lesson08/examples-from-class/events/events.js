function sayHello(name) {
  alert('Hello ' + name);
}

window.onload = function() {
  var button = document.getElementById('my-input-button');
  var inputText = document.getElementById('my-input');

  alert(inputText.value);

  button.onclick = function(event) {
    event.preventDefault();
    sayHello(inputText.value);
  }
}