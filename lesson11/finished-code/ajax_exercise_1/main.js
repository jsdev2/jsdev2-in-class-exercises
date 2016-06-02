
// In the index.html file there is a "Get Consumer Finance Data" 
// button. When the user clicks the button, pull data from 
// this api: 

// http://data.consumerfinance.gov/api/views.json

// Handle the link success and error responses accordingly, 
// using console.log() to print the results if successful.



// Bonus: Separate out most of your logic into a function
// so that you can use it with a different API, that is fetched
// when the user clicks a different button. Handle both success 
// and error scenarios.

// Suggestions: City of New York, or the Open Movie Database.

// Sample urls which should get you back some stuff:

// https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD

// http://www.omdbapi.com/?s=trains

// (The bonus HAS been done below.)


var consumerFinanceUrl = 'http://data.consumerfinance.gov/api/views.json';

var imdbUrl = 'http://www.omdbapi.com/?s=trains';

function makeApiFetchingButton(buttonSelector, url) {
  $(buttonSelector).on('click', function() {
    $.get(url, function(response) {
      console.log(response);
    });
  });
}

makeApiFetchingButton('#getDataButton', consumerFinanceUrl);
makeApiFetchingButton('#getCustomDataButton', imdbUrl);



