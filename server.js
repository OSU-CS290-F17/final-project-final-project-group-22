/*
 * Names: Jerermy Chew, Tucker Shannn
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var asciiData = require('./asciiData');
var Handlebars = require('handlebars');
var app = express();
var port = process.env.PORT || 3000;
var booltest = 1;
var FileReader = require('filereader')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')


app.get('/', function (req, res) {
  res.status(200).render('homePage',{asciiData:asciiData, booltest:booltest});
});

app.get('/post/:postId', function(req, res, next) {
  var postID= req.params.postId;
  //console.log(postID + 99);
  //console.log("==postID:", postData[1]);
  if (postData[postID]) {
    var person = postData[postID];
    console.log(person);
    res.status(200).render('homePage',{postItems:[person]});
  }
  else {
    next();
  }
});

app.use(express.static('public'));

app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
