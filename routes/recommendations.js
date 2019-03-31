const express = require('express');
const router = express.Router();

module.exports = () => {

  // returns all categories for user
  router.get('/', (req, res) => {
    res.send('boop');
  });

  // create new category
  router.post('/new', (req, res) => {});

  return router;
}
