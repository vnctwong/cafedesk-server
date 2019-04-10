const express = require('express');
const yelp = require('../api/yelp');
const db = require('../models');
const {
  combineOneWithLocalInfo,
} = require('../helpers/combineWithLocal');

const router = express.Router();

// returns list of all businesses stored in DB
module.exports = () => {
  router.get('/', (req, res) => {
    db.Business.findAll()
      .then((businesses) => {
        res.status(200).send(businesses);
      });
  });

  // create new business
  router.post('/', (req, res) => {
    db.Business
      .create({
        name: req.params.business.name,
        img_url: req.params.business.image_url,
        address: req.params.business.location.display_address.join(' '),
        longitude: req.params.business.coordinates.longitude,
        latitude: req.params.business.coordinates.latitude,
        yelp_id: req.params.business.id,
      })
      .then(() => {
        res.status(200).send('Created business');
      });
  });

  // retrieve specific business
  router.get('/:id', (req, res) => {
    db.Business.findByPk(req.params.id)
      .then((result) => {
        yelp.getBusinessDetailed(result.yelp_id, result.id, req.params.user_id)
          .then(yelpResult => combineOneWithLocalInfo(yelpResult))
          .then((specificBusiness) => {
            res.status(200).send(specificBusiness);
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send(error);
          });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(error);
      });
  });

  return router;
};
