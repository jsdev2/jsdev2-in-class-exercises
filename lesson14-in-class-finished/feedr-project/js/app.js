
// /*
//   Please add all Javascript code to this file.
// */

function relevantPropertiesOnly(article) {
  return {
    title:     article.title,
    thumbnail: article.thumbnail,
    score:     article.score,
    subreddit: article.subreddit
  };
}

function articleToHTML(article) {
  return '<article class="article">' +
         '  <section class="featuredImage">' +
         '    <img src="' + article.thumbnail + '" alt="" />' +
         '  </section>' +
         '  <section class="articleContent">' +
         '    <a href="#"><h3>' + article.title + '</h3></a>' +
         '    <h6>' + article.subreddit + '</h6>' +
         '  </section>' +
         '  <section class="impressions">' +
              article.score +
         '  </section>' +
         '  <div class="clearfix"></div>' +
         '</article>';
}

function handleResponse(response) {
  var articles = response.data.children.slice(0,4).map(function(item) {
    return relevantPropertiesOnly(item.data);
  });

  console.log(articles);

  // Remove existing articles from DOM
  $('#main.container').html('');

  // Add new articles to DOM
  articles.forEach(function(article) {
    $('#main.container').append(articleToHTML(article));
  });

  // Hide the "loading" popup
  $('#popUp').addClass('hidden');

}

// Make it so.
$.get('https://www.reddit.com/top.json', handleResponse);



