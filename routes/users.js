const express = require('express');
const db = require('../models');
const {
  combineWithRemoteInfo,
} = require('../helpers/combineWithRemote');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    db.User.findAll()
      .then((result) => {
        res.status(200).send(result);
      });
  });
  router.post('/', (req, res) => {
    db.User.create({
      name: req.params.name || 'Test User',
    });
    res.status(200).send('Created user');
  });

  router.get('/:user_id', (req, res) => {
    db.User.findByPk(req.params.user_id)
      .then((result) => {
        res.status(200).send(result);
      });
  });

  router.get('/:user_id/favourites', (req, res) => {
    db.User.findOne({
        where: {
          id: req.params.user_id,
        },
      })
      .then((result) => {
        result.getFavs()
          .then((favourites) => {
            return combineWithRemoteInfo(favourites);
          })
          .then((combinedFavourites) => {
            res.status(200).send(combinedFavourites);
          });
      });
  });
  router.post('/:user_id/favourites/', (req, res) => {
    db.User_fav_business.create({
      UserId: req.params.user_id,
      BusinessId: req.params.business_id || 1,
    });
    res.status(200).send(`User ${req.params.user_id}'s favourited business with id ${req.params.business_id}`);
  });
  router.post('/:user_id/favourites/:favourite_id', (req, res) => {
    db.User_fav_business.destroy({
        where: {
          id: req.params.favourite_id,
        },
      })
      .then(() => {
        res.status(200).send(`User ${req.params.user_id} destroyed favourite with id ${req.params.favourite_id}`);
      });
  });

  router.get('/:user_id/views', (req, res) => {
    db.User.findOne({
        where: {
          id: req.params.user_id,
        },
      })
      .then((findOneReturns) => {
        findOneReturns.getViews()
          .then((views) => {
            return combineWithRemoteInfo(views);
          })
          .then((combinedViews) => {
            res.status(200).send(combinedViews);
          });
      });
  });
  router.post('/:user_id/views', (req, res) => {
    db.User_viewed_business.create({

      viewed: true,
      UserId: req.params.user_id,
      BusinessId: req.params.business_id || 1,

    }).then(() => {
      res.status(200).send(`User ${req.params.user_id} viewed business ${req.params.business_id}`);
    });
  });
  router.post('/:user_id/views/:view_id', (req, res) => {
    db.User_viewed_business.update({
        viewed: true,
      }, {
        where: {
          id: req.params.view_id,
        },
      })
      .then(() => {
        res.status(200).send(`User ${req.params.user_id} viewed id ${req.params.viewed_id}`);
      });
  });

  router.get('/:user_id/tags', (req, res) => {
    db.User.findOne({
        where: {
          id: req.params.user_id,
        },
      })
      .then((findOneReturns) => {
        findOneReturns.getTags()
          .then((tags) => {
            return combineWithRemoteInfo(tags);
          })
          .then((combinedTags) => {
            res.status(200).send(combinedTags);
          });
      });
  });
  router.post('/:user_id/tags/', (req, res) => {

    db.Tag.create({
      name: 'test tag name',
      rated: true,
      UserId: req.params.user_id,
      BusinessId: 1,
    });
    res.status(200).send(`User ${req.params.user_id} created tag about business${req.params.business_id}`);
  });

  return router;
};
