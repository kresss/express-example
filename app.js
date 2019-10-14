var express = require('express');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var helloRouter = require('./routes/hello');
var goodbyeRouter = require('./routes/goodbye');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/hello', helloRouter);
app.use('/goodbye', goodbyeRouter);

module.exports = app;
