
// - Sign up for openweathermap.org and generate an API key.
// - User either $.ajax or $.get to pull weather current data .
//   for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).

// - Print the temperature in console.

// - Bonus 1: add a form prompting user for the city and state.
// - Bonus 2: convert answer from Kelvin to Fahrenheit.

// (Bonuses are NOT done in this version. 
// They are left as an exercise.)


var weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
var apiKey = "5641400aa63d6b4c8aa7397877edc84d";

var city = "washington,dc";

var queryString = "?q=" + city + "&APPID=" + apiKey;

var weatherUrlWithQuery = weatherUrl + queryString;

$.get(weatherUrlWithQuery, function(response) {
  console.log(response);
});



