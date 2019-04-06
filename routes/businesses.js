const express = require('express');
const yelp = require('../api/yelp');
const db = require('../models');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    db.Business.findAll()
      .then((businesses) => {
        res.status(200).send(businesses);
      });
  });
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

  router.get('/:business_id', (req, res) => {
    yelp.getBusiness(req.params.business_id)
      .then((yelpResult) => {
        db.Business.findOne({
            where: {
              yelp_id: yelpResult.data.id,
            },
          })
          .then((specificBusiness) => {
            if (specificBusiness) {
              // hard coded for now, to pull additional info from specificBusiness
              yelpResult.data.ourTags = ['quiet', 'laptop friendly'];
            }
            res.status(200).send(yelpResult.data);
          });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

  return router;
};
