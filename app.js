const express = require('express');
const path = require('path');

// Init app
const app = express();



//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
	res.render('index', {
		title: 'Hello World'
	}); 
}) 
app.get('/users', function(req, res){
	res.render('users/index', {
		users: [
			{id: 1, name: 'Tom'},
			{id: 2, name: 'Ca'}
		]
	});
})
app.get('/products', function(req, res) {
	res.send('Products loading...');
})
app.listen(3000, function() {
	console.log('Server started on 3000...');
})