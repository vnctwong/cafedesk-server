/* eslint-disable no-restricted-syntax */
const express = require('express');
const {
  combineWithLocalInfo,
} = require('../helpers/combineWithLocal');
const yelp = require('../api/yelp');

const router = express.Router();

module.exports = () => {
  // returns list of businesses that match user's preferences
  router.get('/', (req, res) => {
    const tags = req.query.tags || ['quiet', 'outlets', 'friendly'];

    yelp.search('cafe', req.query.longitude, req.query.latitude)
      .then(results => combineWithLocalInfo(results))
      .then((combinedResults) => {
        const finalResults = [];

        for (const i in combinedResults) {
          if (combinedResults[i].tags && combinedResults[i].tags.filter(element => tags.includes(element)).length !== 0) {
            finalResults.push(combinedResults[i]);
          }
        }

        if (finalResults.length > 0) {
          res.status(200).send(finalResults);
        } else {
          res.status(500).send('No results found');
        }
      });
  });


  return router;
};
