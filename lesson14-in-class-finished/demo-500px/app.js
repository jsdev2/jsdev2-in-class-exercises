$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: '788d97b6b880ef52dfe273dc99dff897833ef303'
  });

  // When the user logs in we will pull their favorite photos
  _500px.on('authorization_obtained', function() {
    $('.sign-in-view').hide();
    $('.image-results-view').show();

    // check if navigator geolocation is available from the browser
    if (navigator.geolocation) {
      // if it is use the getCurrentPosition method to retrieve the Window's location
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        console.log('lat: ', lat);
        console.log('long: ', long);

        // Feel free to adjust the search radius as you see fit
        var radius = '25mi';

        var searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes', // We only want landscape photos
          image_size: 3, // This isn't neccessary but by default the images are thumbnail sized
          rpp: 28,  // Return 28 results
          sort: 'highest_rating'  // Sort results by highest rated
        };

        // Now that we have the user's location, let's search the API for landscape photos nearby
        _500px.api('/photos/search', searchOptions, function(response) {
          if (response.data.photos.length === 0) {
            alert('No photos found!');
          } else {
            handleResponseSuccess(response);
          }
        });

        // Get the currently logged in user
        _500px.api('/users', function(response) {
          var me = response.data.user;
          // Now we have access to the user name and other information
          console.log('Loggin in: ', me);
        });
      });
    } else {
      $('.images').append('Sorry, the browser does not support geolocation');
    }
  });

  // function handleResponseSuccess(response) {
  //   var allPhotos = response.data.photos;
  //   console.log(allPhotos)

  //   allPhotos.forEach(function(photo) {
  //     var $photoDiv = $('<div>').addClass('image');
  //     var $img = $('<img>').attr('src', photo.image_url);
  //     var $name = $('<p>').text(photo.name).addClass('name');
  //     var $camera = $('<p>').text(photo.camera).addClass('camera');
  //     $photoDiv.append($img, $name, $camera);
  //     $('.images').append($photoDiv);
  //   });
  // }

  var photoTemplate = $('#photo-template').html();
  var renderPhotoHTML = Handlebars.compile(photoTemplate);

  function handleResponseSuccess(response) {
    var allPhotos = response.data.photos;

    allPhotos.forEach(function(photo) {
      $('.images').append(renderPhotoHTML(photo));
    });
  }

  // If the user clicks the login link, log them in
  $('#login').click(function() {
    _500px.login();
  });

  // If the user has already logged in & authorized your application, this will fire an 'authorization_obtained' event
  // This keeps the site from prompting the user to log in each time the page is refreshed
  _500px.getAuthorizationStatus();
});
