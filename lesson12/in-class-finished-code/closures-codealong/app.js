function setClickListener() {
  var a = 1;
  
  $('.show').on('click', function() {
    alert(a);
  });

  $('.increase').on('click', function() {
    a = a + 1;
  });
}

setClickListener();