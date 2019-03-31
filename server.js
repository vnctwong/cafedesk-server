const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || 'development';
const express = require('express');
const app = express();

// require routes
const usersRoutes = require('./routes/users');
const tagsRoutes = require('./routes/users');
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