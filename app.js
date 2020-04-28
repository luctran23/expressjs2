const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
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

var users = [
	{id: 1, name: 'Tom'},
	{id: 2, name: 'Ca'},
	{id: 3, name: 'Cua'}
];
app.get('/users', function(req, res){
	res.render('users/index', {
		users: users
	});
})
// create Search users feature for the website
app.get('/users/search', function(req, res) {
	
	var q = req.query.q;
	var matchedUsers = users.filter(user => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1);
	res.render('users/index', {
		users: matchedUsers
	})
})
app.get('/users/create', function(req, res) {
	res.render('users/create');
});
app.post('/users/create', function(req, res) {
	users.push(req.body);
	res.redirect('/users');
})
app.listen(3000, function() {
	console.log('Server started on 3000...');
})