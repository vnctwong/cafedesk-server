const express = require('express');
const router = express.Router();

const yelp = require('../api/yelp')

module.exports = () => {
  router.get('/', (req, res) => {
    res.send('All businesses');
  });
  router.get('/:business_id', (req, res) => {
    yelp.getBusiness(req.params.business_id)
      .then(response => {
        res.status(200).send(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  });

  return router;
}
