var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const firebase = require("firebase");

const config = {
  apiKey: "AIzaSyDIdLVr7lljbFvqHP0TYD6HrmNGQXEQIds",
  authDomain: "fir-graphql-phonebook.firebaseapp.com",
  databaseURL: "https://fir-graphql-phonebook.firebaseio.com",
  projectId: "fir-graphql-phonebook",
  storageBucket: "fir-graphql-phonebook.appspot.com",
  messagingSenderId: "1051140951045"
};
firebase.initializeApp(config);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
