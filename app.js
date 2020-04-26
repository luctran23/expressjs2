const express = require('express');
const path = require('path');

// Init app
const app = express();



//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
	res.render('index', {
		title: 'Hello World 4'
	}); 
}) 
app.listen(3000, function() {
	console.log('Server started on 3000...');
})