var newListItem = document.createElement('li');
var newText = document.createTextNode('I\'m the last');
newListItem.appendChild(newText);

var anotherLi = document.createElement('li');
var anotherText = document.createTextNode("I'm really the last");
anotherLi.appendChild(anotherText);

var list = document.getElementById('list');

list.appendChild(newListItem);
list.appendChild(anotherLi);

var lastSpan = document.createElement('span');
var lastWord = document.createTextNode(' word');
lastSpan.appendChild(lastWord);
lastSpan.style.color = "green";
anotherLi.appendChild(lastSpan);


