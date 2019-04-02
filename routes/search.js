const express = require('express');
const router = express.Router();

const yelp = require('../api/yelp')
const business = require('../controllers/business')

module.exports = () => {
  router.get('/:keyword', (req, res) => {
    business.getBusiness(req.params.keyword)
      .then(result => {
        console.log(result);

        result.size === 0 ?
          yelp.search(req.params.keyword)
          .then(response => {
            res.status(200).send(response.data);
          })
          .catch(error => {
            console.log(error);
          }) :
          res.status(200).send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return router;
}
