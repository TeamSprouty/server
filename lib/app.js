const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const ensureAuth = require('./auth/ensure-auth')();

const app = express();

// app.use(express.static('./public'));
app.use(morgan('dev'));
app.use(bodyParser());

const auth = require('./routes/auth');
const users = require('./routes/users');
const plants = require('./routes/plant');


app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/plants', plants);


module.exports = app;