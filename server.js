/*
 * Names: Jeramie Chew, Tucker Shannn
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var asciiData = require('./asciiData');
var Handlebars = require('handlebars');
var app = express();
var port = process.env.PORT || 3000;
var booltest = 1;
var FileReader = require('filereader')

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB;

var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword +
  '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;

var mongoConnection = null;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.status(200).render('homePage',{asciiData:asciiData, booltest:booltest});
});



app.get('/post', function (req, res) {
var peopleDataCollection = mongoConnection.collection('asciiData');
  peopleDataCollection.find({}).toArray(function (err, results) {
    if (err) {
      res.status(500).send("Error fetching art from DB");
    } else {
      console.log("== query results:", results);
      res.status(200).render('main', {
        people: results
      });
    }
  });
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
