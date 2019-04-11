/* eslint-disable indent */
const express = require('express');
const db = require('../models');
const {
  Op,
} = require('sequelize');
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
    db.User_fav_business.findOrCreate({
        where: {
          [Op.and]: {
            UserId: req.params.user_id,
            BusinessId: req.query.business_id,
          },
        },
        defaults: {
          UserId: req.params.user_id,
          BusinessId: req.query.business_id || 1,
        },
      })
      .then((results) => {
        if (results[1]) {
          res.status(200).send(results[0]);
        } else {
          db.User_fav_business.destroy({
            where: {
              [Op.and]: {
                UserId: results[0].UserId,
                BusinessId: results[0].BusinessId,
              },
            },
          });
        }
      });
  });

  // get/create/update user's view history
  router.get('/:user_id/views', (req, res) => {
    db.User.findByPk(req.params.user_id)
      .then((findOneReturns) => {
        findOneReturns.getViews()
          .then(views => (views.length > 0 ? combineWithRemoteInfo(views) : 'No results found'))
          .then((combinedViews) => {
            res.status(200).send(combinedViews);
          })
          .catch((error) => {
            res.status(500).send('No results found: ', error);
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
    db.Tag.findOrCreate({
        where: {
          [Op.and]: {
            UserId: req.params.user_id,
            BusinessId: req.query.business_id,
            name: req.query.name,
          },
        },
        defaults: {
          UserId: req.params.user_id,
          BusinessId: req.query.business_id || 1,
          name: req.query.name,
        },
      })
      .then((results) => {
        if (results[1]) {
          res.status(200).send(results[0]);
        } else {
          db.Tag.destroy({
            where: {
              [Op.and]: {
                UserId: results[0].UserId,
                BusinessId: results[0].BusinessId,
              },
            },
          });
        }
      });
  });

  return router;
};
