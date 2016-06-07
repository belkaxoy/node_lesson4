var request = require('request');
var cheerio = require('cheerio');

request('https://habrahabr.ru/', function (error, response, html) {
  if (error) {
    return console.error('error is: ', error);
  } 
  

  if ( response.statusCode !== 200 ) {
    return console.log('incorrect statusCode: ', response.statusCode);
  }

  var $ = cheerio.load(html);
  
  $('.posts_list .post__header').each(function(i, element) {
    var publishDate = $(this).find('span.post__time_published'); 
  	var title = $(this).find('h2.post__title .post__title_link');
  	var tags = $(this).find('.hubs > a.hub');
  	
	  console.log('\n\n\nПост №' + (i+1) + ' (' + publishDate.text() + ')\n');
    console.log('Заголовок: ' + title.text());
    console.log('Теги: ');
    
    tags.each(function() {
      console.log('         - ' + $(this).text());      
    });
  });
});