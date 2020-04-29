const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');

var adapter = new FileSync('db.json')
var db = low(adapter);

//set default
db.defaults({users: [] })
.write();
// Init app
const app = express();



//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.render('index', {
		title: 'Hello World'
	}); 
}) 


app.get('/users', function(req, res){
	res.render('users/index', {
		users: db.get('users').value()
	});
})
// create Search users feature for the website
app.get('/users/search', function(req, res) {
	
	var q = req.query.q;

	var matchedUsers = db.get('users').value().filter(user => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1);
	res.render('users/index', {
		users: matchedUsers
	})
})
app.get('/users/create', function(req, res) {
	res.render('users/create');
});
app.post('/users/create', function(req, res) {
	db.get('users').push(req.body).write();
	res.redirect('/users');
})
app.listen(3000, function() {
	console.log('Server started on 3000...');
})