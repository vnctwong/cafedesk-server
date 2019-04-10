/* eslint-disable indent */
const express = require('express');
const db = require('../models');
const {
  combineWithRemoteInfo,
} = require('../helpers/combineWithRemote');

const router = express.Router();

module.exports = () => {
  // get/create users
  router.get('/', (req, res) => {
    db.User.findAll()
      .then((result) => {
        res.status(200).send(result);
      });
  });
  router.post('/', (req, res) => {
    db.User.create({
      name: req.query.name || 'Test User',
    });
    res.status(200).send('Created user');
  });

  // get specific user's details
  router.get('/:user_id', (req, res) => {
    db.User.findByPk(req.params.user_id)
      .then((result) => {
        res.status(200).send(result);
      });
  });

  // get/create/update user's favourites
  router.get('/:user_id/favourites', (req, res) => {
    db.User.findByPk(req.params.user_id)
      .then((result) => {
        result.getFavs()
          .then(favourites => combineWithRemoteInfo(favourites))
          .then((combinedFavourites) => {
            res.status(200).send(combinedFavourites);
          });
      });
  });
  router.post('/:user_id/favourites/', (req, res) => {
    db.User_fav_business.create({
      UserId: req.params.user_id,
      BusinessId: req.query.business_id || 1,
    });
    res.status(200).send(`User ${req.params.user_id}'s favourited business with id ${req.query.business_id}`);
  });
  router.post('/:user_id/favourites/:favourite_id', (req, res) => {
    db.User_fav_business.destroy({
        where: {
          id: req.query.favourite_id,
        },
      })
      .then(() => {
        res.status(200).send(`User ${req.params.user_id} destroyed favourite with id ${req.query.favourite_id}`);
      });
  });

  // get/create/update user's view history
  router.get('/:user_id/views', (req, res) => {
    db.User.findByPk(req.params.user_id)
      .then((findOneReturns) => {
        findOneReturns.getViews()
          .then(views => combineWithRemoteInfo(views))
          .then((combinedViews) => {
            res.status(200).send(combinedViews.slice(0, 10));
          });
      });
  });
  router.post('/:user_id/views', (req, res) => {
    db.User_viewed_business.create({
      viewed: true,
      UserId: req.params.user_id,
      BusinessId: req.query.business_id || 1,
    }).then(() => {
      res.status(200).send(`User ${req.params.user_id} viewed business ${req.query.business_id}`);
    });
  });

  // get/create/update user's tags
  router.get('/:user_id/tags', (req, res) => {
    db.User.findByPk(req.params.user_id)
      .then((findOneReturns) => {
        findOneReturns.getTags()
          .then(tags => combineWithRemoteInfo(tags))
          .then((combinedTags) => {
            res.status(200).send(combinedTags);
          });
      });
  });
  router.post('/:user_id/tags/', (req, res) => {
    db.Tag.create({
      name: req.query.name || 'Quiet',
      rated: true,
      UserId: req.params.user_id,
      BusinessId: req.query.business_id || 1,
    });
    res.status(200).send(`User ${req.query.user_id} created tag about business${req.query.business_id}`);
  });

  return router;
};
