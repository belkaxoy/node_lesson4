// Обработка форм с помощью ExpressJS

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Разбираем application/x-www-form-urlencoded
app.use( bodyParser.urlencoded() );

// Разбираем application/json
app.use( bodyParser.json() );

app.get('/', function (req, res) {
  res.send( getForm() );
});

// Обработка POST запроса
app.post('/', function (req, res) {
  var form = getForm(req.body.name, req.body.surname);
  res.send(form + 'Thank you for your personal data sending!');
});

// Функция для получения разметки формы
var getForm = function (name, surname) {
  return '<form action="/" method="post">'+
    '<input value="'+ (name || '') +'" name="name" />'+
    '<input value="'+ (surname || '') +'" name="surname" />'+
    '<input type="submit" />'+
  '</form>';
};

app.listen(8000, function () {
  console.log('Server was running on: ', 8000);
});

// var request = require('request');
// var cheerio = require('cheerio');
// 
// request('https://habrahabr.ru/', function (error, response, html) {
//   if (error) {
//     return console.error('error is: ', error);
//   } 
//   
// 
//   if ( response.statusCode !== 200 ) {
//     return console.log('incorrect statusCode: ', response.statusCode);
//   }
// 
//   var $ = cheerio.load(html);
//   
//   $('.posts_list .post__header').each(function(i, element) {
//     var publishDate = $(this).find('span.post__time_published'); 
//   	var title = $(this).find('h2.post__title .post__title_link');
//   	var tags = $(this).find('.hubs > a.hub');
//   	
// 	  console.log('\n\n\nПост №' + (i+1) + ' (' + publishDate.text() + ')\n');
//     console.log('Заголовок: ' + title.text());
//     console.log('Теги: ');
//     
//     tags.each(function() {
//       console.log('         - ' + $(this).text());      
//     });
//   });
// });