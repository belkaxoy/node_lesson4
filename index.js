var request = require('request');
var cheerio = require('cheerio');

/*// Запрос ресурса
request('https://www.gismeteo.ru/city/daily/4720/', function (error, response, html) {
  if (error) {
    return console.error('error is: ', error);
  } 
  
  // Корректный ли ответ сервера?
  if ( response.statusCode !== 200 ) {
    return console.log('incorrect statusCode: ', response.statusCode);
  }

  // Загрузка данных в модуль cheerio
  var $ = cheerio.load(html);
  
  // Извлекаем нужные нам данные
  var temp = $('#tbwdaily1 > tr:nth-of-type(3) > td.temp > span:first-child')
    .text()
    .trim();

  console.log('temp is: ', temp);
});*/

request('http://www.cheb.ru/', function (error, response, html) {
  if (error) {
    return console.error('error is: ', error);
  } 
  

  if ( response.statusCode !== 200 ) {
    return console.log('incorrect statusCode: ', response.statusCode);
  }

  var $ = cheerio.load(html);
  
  $('.posts_list .post__header').each(function(i, element) {

	console.log(i);
  	
  	var title = $(this).find('.post__title');
    console.log('Title: ' + title.text());
  });
});