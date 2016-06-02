// var url = 'https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD';

var url = 'http://www.omdbapi.com?s=ninjas';

$.get(url, function(response, status) {
  console.log(status);
  console.log(response);

  // Or, instead of just console.log()ing stuff, do this:

  // var movies = response.Search;
  // movies.forEach(function(movie) {
  //   console.log(movie.Title + " was made in " + movie.Year);
  // });
});

