const express = require('express');
const router = express.Router();

const yelp = require('../api/yelp')

module.exports = () => {
  router.get('/:keyword', (req, res) => {
    yelp.search(req.params.keyword)
      .then(response => {
        res.status(200).send(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  });

  return router;
}
