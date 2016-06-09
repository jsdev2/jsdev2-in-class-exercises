$(function() {
  // DOM is now ready

  _500px.init({
    sdk_key: '788d97b6b880ef52dfe273dc99dff897833ef303'
  });

  $('#login').click(function() {
    _500px.login();
  });

  // If the user has already logged in & authorized your application, 
  // this will fire an 'authorization_obtained' event.
  // This keeps the site from prompting the user to log in each 
  // time the page is refreshed
  // Note: You might want to keep this line commented out
  // while testing the app, so you can see what it's like
  // for the user to have to press the login button.
  _500px.getAuthorizationStatus();

  _500px.on('authorization_obtained', function() {
    $('.sign-in-view').hide();
    $('.image-results-view').show();

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(function(position) {
        // console.log(position);
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log('lat: ' + lat);
        console.log('long: ' + long);
        var radius = '25mi';

        var searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes',
          image_size: 3
        };

        function handleResponseSuccess(res) {
          var allPhotos = res.data.photos;
          allPhotos.forEach(function(photo) {
            console.log(photo);
            var url = photo.image_url;
            var $img = $('<img>').attr({src: url}).addClass('image');
            $('.images').append($img);
          });
        }

        _500px.api('/photos/search', searchOptions, function(response) {
          if (response.data.photos.length === 0) {
            $('.images').append('No photos found!');
          } else {
            handleResponseSuccess(response);
          }
        });
      });
    } else {
      $('.images').append('Sorry no geolocation');
    }

  });
});
