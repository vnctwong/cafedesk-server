const express = require('express');
const yelp = require('../api/yelp');
const {
  combineWithLocalInfo,
} = require('../helpers/combineWithLocal');

const router = express.Router();

module.exports = () => {
  // returns results of standard yelp search with additional data from local DB
  router.get('/:keyword', (req, res) => {
    yelp.search(req.params.keyword, req.params.longitude, req.params.latitude)
      .then(yelpResults => combineWithLocalInfo(yelpResults))
      .then((combinedResults) => {
        res.status(200).send(combinedResults);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  return router;
};
