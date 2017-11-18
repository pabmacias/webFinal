var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var indexRoutes = require('./app_server/routes/index');
var gasolineriasRoutes = require('./app_server/routes/gasolinerias');
var db = require('./db')
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var sessionData = require('./session');
var sessionStore = new MySQLStore(sessionData.options);
var nodemailer = require('nodemailer');
var emailConfig = require('./email');

var app = express();

app.use(function(req, res, next) {
  console.log("Welcome to my Gas app!!!");
  next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
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

let transporter = nodemailer.createTransport(emailConfig.poolConfig);
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  }
  else {
    console.log('Sever is ready to send emails.');
  }
})

app.use(function(req, res, next){
  req.session.destroy;
  next();
});

app.use(function(req,res,next){
  let mailOptions = {
    from: '"El iron" <pabmacias28@gmail.com>',
    to: "pabmacias28@gmail.com",
    subject: "testing",
    text: "Hello world",
    html: "<html><body><h1>Hello world</h1></body></html>"
  };
  transporter.sendMail(mailOptions, (error,info) => {
    if (error) {
      console.log("ERROR");
      console.log(error);
    }
    else {
      console.log('Message sent: %s', info.messageID);
    }
  })
  next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extend: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);
app.use('/gasolinerias', gasolineriasRoutes);

// catch 404 and forward to error handler
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
