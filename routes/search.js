const express = require('express');
const router = express.Router();

const yelp = require('../api/yelp')

module.exports = () => {
  router.get('/:keyword', (req, res) => {
    yelp.search(req.params.keyword)
      .then(response => {
        res.send(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // res.send(`Search for: ${req.params.keyword}`);
  });

  return router;
}
