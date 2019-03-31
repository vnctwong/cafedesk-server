const express = require('express');
const router = express.Router();

const yelp = require('../api/yelp')

module.exports = () => {
  router.get('/:keyword', (req, res) => {
    const temp = yelp.search(req.params.keyword);
    // res.send(`Search for: ${req.params.keyword}`);
    res.send(`${temp}`);
  });

  return router;
}
