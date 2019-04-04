const express = require('express');
const yelp = require('../api/yelp');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    res.send('All businesses');
  });
  router.get('/:business_id', (req, res) => {
    yelp.getBusiness(req.params.business_id)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

  return router;
};
