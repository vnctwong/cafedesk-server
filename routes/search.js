const express = require('express');
const yelp = require('../api/yelp');
const {
  combineWithLocalInfo
} = require('../helpers/combineWithLocal');

const router = express.Router();

module.exports = () => {
  // search route
  router.get('/:keyword', (req, res) => {
    yelp.search(req.params.keyword)
      .then((yelpResults) => {
        return combineWithLocalInfo(yelpResults);
      })
      .then((combinedResults) => {
        res.status(200).send(combinedResults);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  return router;
};
