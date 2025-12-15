var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');

const bookRouter = require('./routes/book');
const userRouter = require('./routes/user');
const borrowerRouter = require('./routes/borrower');
const loginRouter = require('./routes/login');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/login', loginRouter); //login is not protected 

app.use(authenticateToken); //all routes below this line are protected

app.use('/book', bookRouter);
app.use('/user', userRouter);
app.use('/borrower', borrowerRouter);
app.use('/login', loginRouter);


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.MY_TOKEN, function(err, user) {  
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    })
  }

module.exports = app;

