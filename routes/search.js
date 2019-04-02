const express = require('express');
const router = express.Router();

const yelp = require('../api/yelp')
const business = require('../controllers/business')

module.exports = () => {
  // search route
  router.get('/:keyword', (req, res) => {
    // query db to see if keyword can be found locally
    business.search(req.params.keyword)
      .then(result => {
        result.length === 0 ?
          // if no results found locally query yelp api
          nothingLocal(res, req.params.keyword) :
          // if results found locally dispaly results
          foundLocal(res, result);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return router;
}

function foundLocal(res, result) {
  res.status(200).send(result);

  // check age of results, if too long update db from yelp
}

function nothingLocal(res, keyword) {
  let data;

  yelp.search(keyword)
    .then((response) => {
      data = response.data;
      res.status(200).send(data)
    })
    .catch((error) => {
      res.status(500).send(error);
    })
    .finally(() => {
      // loop through results and add them to db
      data.businesses.forEach(element => {
        business.create(element)
          .catch(error => {
            console.log('Error with adding to DB');
            console.error(error);
          });
      });
    });
}
