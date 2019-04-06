const PORT = process.env.PORT || 8080;
const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();

app.use(cookieParser());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

// require routes
const usersRoutes = require('./routes/users');
const tagsRoutes = require('./routes/tags');
const businessesRoutes = require('./routes/businesses');
const searchRoutes = require('./routes/search');
const recommendationsRoutes = require('./routes/recommendations');

// mount routes
app.use('/users', usersRoutes());
app.use('/tags', tagsRoutes());
app.use('/businesses', businessesRoutes());
app.use('/search', searchRoutes());
app.use('/recommendations', recommendationsRoutes());

app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT);
});
