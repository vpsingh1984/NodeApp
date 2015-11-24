var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var path = require("path");
var mongoose = require("mongoose");

var app = express();

mongoose.connect('mongodb://vpsingh404:userprofile@ds043324.mongolab.com:43324/userprofile');
//app.set('port', process.env.PORT || 8081);
//app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
//app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
//app.use(express.static(path.join(__dirname, '/public')));


app.get('/contactlist', function(req, res){
	console.log('get request');

	db.contactlist.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

app.post('/contactlist', function(req, res){
	console.log(req.body);
	db.contactlist.insert(req.body, function(err, doc){
		res.json(doc);
	})
});

// var Schema = new mongoose.Schema({
// 	_id : String,
// 	name : String,
// 	age : Number
// });

// var user = mongoose.model('emp', Schema);


















// app.post('/new', function(req, res){
// 	new user({
// 		_id: req.body.email,
// 		name: req.body.name,
// 		age: req.body.age
// 	}).save(function(err, doc){
// 		if (err) {
// 			res.json(err);
// 		}else{
// 			res.render('/view', {users: docs});
// 		}
// 	});
// });

// app.get('/user/:id', function(req, res){
// 	user.find({_id: req.params.id}, function(err, docs){
// 		if (err) res.json(err);
// 		else res.render('show', {user: docs[0]})
// 	});
// });
// app.get('/view', function(req, res){
// 	user.find({}, function(err, docs){
// 		if (err) res.json(err);
// 		else res.render('index', {users: docs});
// 	});
// });

// app.get('/user/:id/edit', function(req, res){
// 	res.render('edit-form', {user: req.userId});
// });

// app.param('id', function(req, res, next, id){
// 	user.findById(id, function(err, docs){
// 		if(err) res.json(err);
// 		else{
// 			req.userId = docs;
// 			next();
// 		}
// 	});
// });
// app.put('/user/:id', function(req, res){
// 	user.update({_id: req.params.id},
// 	{
// 		name: req.body.name,
// 		age : req.body.age
// 	}, function(err){
// 		if(err) res.json(err);
// 		else res.redirect('/user/'+req.params.id);
// 	})
// })




app.listen(8081);
console.log("server running on 8081");