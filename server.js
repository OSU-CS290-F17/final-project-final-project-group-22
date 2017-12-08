/*
 * Names: Jeramie Chew, Tucker Shannn
 */
var assert = require('assert');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var asciiData = require('./asciiData');
var Handlebars = require('handlebars');
var app = express();
var port = process.env.PORT || 3000;
var booltest = 1;
var FileReader = require('filereader')

var mongoURL = process.env.MONGO_URL || 'mongodb://cs290_shannont:cs290_shannont@classmongo.engr.oregonstate.edu:27017/cs290_shannont';
console.log("==mongoURL", mongoURL);
var mongoConnection;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var mongoDBDatabase;

mongoClient.connect(mongoURL, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  mongoConnection = db;
  app.listen(port, function () {
    console.log("== Server is listening on port", port);
  });
});
app.use(bodyParser.json());

app.get('/', function (req, res) {


  mongoConnection.collection('sections').find({},{ _id: 0 }).toArray(function(err, docs) {
    
    if (err) {
      res.status(500).send('MongoDB failure!');
    }

    console.log("Found " + docs.length + " sections.");
    res.status(200).render('homePage', {
      asciiData: docs
    });
  });
  // res.status(200).render('homePage',{asciiData:asciiData, booltest:booltest});
});



app.get('/post/:postId', function(req, res, next) {
  var postID= req.params.postId;
  //console.log(postID + 99);
  // console.log("==postID:", postData[postID]);
  if (postData[postID]) {
    var person = postData[postID];
    // console.log(person);
    res.status(200).render('homePage',{postItems:[person]});
  }
  else {
    next();
  }
});


app.post('/ascii', function(req, res){
  var asciiSections = mongoConnection.collection('sections')
  // console.log(req.body.description);
  asciiSections.insert(
    {
        "req.body.section" : {
        "description":  req.body.description,
        "photoURL": req.body.photoURL,
        "userInput": req.body.title
      }

    }
  )
});



app.use(express.static('public'));

app.get('*', function (req, res) {
  res.status(404).render('404');
});
