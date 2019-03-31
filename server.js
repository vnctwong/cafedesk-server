const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || 'development';
const express = require('express');
const app = express();

// require routes
const usersRoutes = require('./routes/users');

// mount routes
app.use('/users', usersRoutes());
