const express = require('express');

const router = express.Router();

const yelp = require('../api/yelp');
const Business = require('../controllers/business');

module.exports = () => {
  // search route
  router.get('/:keyword', (req, res) => {
    // query db to see if keyword can be found locally
    Business.search(req.params.keyword)
      .then((result) => {
        result.length === 0
          // if no results found locally query yelp api
          ?
          nothingLocal(res, req.params.keyword)
          // if results found locally display results
          :
          foundLocal(res, result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  return router;
};

function foundLocal(res, result) {
  res.status(200).send(result);

  // check age of results, if too long update db from yelp
}

function nothingLocal(res, keyword) {
  let data;

  yelp.search(keyword)
    .then((response) => {
      // store response locally and send result to user
      data = response.data;
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send(error);
    })
    .finally(() => {
      // loop through results and add them to db if they are not already stored
      data.businesses.forEach((element) => {
        Business.search(element.name).then((result) => {
          if (result.length === 0) {
            Business.create(element)
              .catch((error) => {
                throw (error);
              });
          }
        });
      });
    });
}
