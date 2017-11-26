var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var db = require('./db')
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var sessionData = require('./session');
var sessionStore = new MySQLStore(sessionData.options);

var indexRoutes = require('./app_server/routes/index');
var maalokaRoutes = require('./app_server/routes/maaloka');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

db.connect(function(err) {
  if (err) {
    console.log('Unable to connect to MySQL.')
    process.exit(1)
  }
  else{
  	console.log('Successfully connected to MySQL.')
  }
});

app.use(
  session({
    secret: 'secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    unset: 'destroy'
  })
);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extend: true
}));
app.use(cookieParser());

/*app.get('/', function (req, res) {
  res.send('hola');
});*/

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});

app.use('/', indexRoutes);
app.use('/maaloka', maalokaRoutes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  console.log(err);
  fs.readFile("./public/404.html", function(err, data){
	  res.writeHead(404, {'Content-Type': 'text/html'});
	  res.write(data);
	  res.end();
	});
});

// error handlers
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	console.log(err);
  	fs.readFile("./public/500.html", function(err, data){
	  res.writeHead(500, {'Content-Type': 'text/html'});
	  res.write(data);
	  res.end();
	});
});

module.exports = app;
