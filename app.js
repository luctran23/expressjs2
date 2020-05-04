const express = require('express');
const path = require('path');

var bodyParser = require('body-parser');

var userRoutes = require('./routes/users_router');
// Init app
const app = express();


//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('views'));


app.get('/', function(req, res) {
	res.render('index', {
		title: 'Hello World'
	}); 
}) 

app.use('/users', userRoutes);

app.listen(3000, function() {
	console.log('Server started on 3000...');
})