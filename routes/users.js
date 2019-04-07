const express = require('express');
const db = require('../models');
const {
  combineWithRemoteInfo
} = require('../helpers/combineWithRemote');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    db.User.findAll()
      .then((result) => {
        res.send(result);
      });
  });
  router.post('/', (req, res) => {
    db.User.create({
      name: 'just test name',
    });
    res.send('Created user');
  });

  router.get('/:user_id', (req, res) => {
    // * pull row in db where id = ${req.params.user_id}
    // model(search by id)
    db.User.findByPk(req.params.user_id)
      // get a search result/obj
      .then((result) => {
        // res.send(result)
        res.send(result);
      });
  });

  router.get('/:user_id/favourites', (req, res) => {
    // * find all favs for user id
    // look favs table, return User_fav_business where userId = req.params.user_id
    db.User.findOne({
        where: {
          id: req.params.user_id,
        },
      })
      .then((result) => {
        result.getFavs()
          .then((favourites) => {
            console.log(favourites);
            return combineWithRemoteInfo(favourites);
          })
          .then((combinedFavourites) => {
            res.status(200).send(combinedFavourites);
          });
      });
  });
  router.post('/:user_id/favourites/', (req, res) => {
    // * create row in user_fav for user_id and business_id
    db.User_fav_business.create({
      UserId: req.params.user_id,
      // need to hardcode businessId for now      
      BusinessId: 1,
    });
    // need to hardcode businessId for now
    res.send(`User ${req.params.user_id}'s favourited business with id ${req.params.business_id}`);
  });

  router.post('/:user_id/favourites/:favourite_id', (req, res) => {
    // on req, delete /:user_id/favourites/:${req.params.favourite_id}
    db.User_fav_business.destroy({
        where: {
          id: req.params.favourite_id,
        },
      })
      .then(() => {
        // send message ${req.params.user_id} deleted a favorite
        res.send(`User ${req.params.user_id} destroyed favourite with id ${req.params.favourite_id}`);
      });
  });

  router.post('/:user_id/views', (req, res) => {
    // when req recieve, create row in user_view_business with userId and businessId
    db.User_viewed_business.create({

      viewed: true,
      UserId: req.params.user_id,
      // route not set to handle businessId atm
      BusinessId: 1,

    }).then(() => {
      // send res saying created
      res.send(`User ${req.params.user_id} viewed business ${req.params.business_id}`);
    });
  });
  router.get('/:user_id/views', (req, res) => {
    // *on req, res.send businesses by businessId where UserId = params.user_id
    // make query on user_viewed_business
    db.User.findOne({
        where: {
          // *select rows where UserId = req.params.user_id
          id: req.params.user_id,
        },
        // chained methods have shared scope
      })
      .then((findOneReturns) => {
        // console.log('what is findAll returning', findOneReturns);
        // filter result (a promise obj) for businessId (need association)
        findOneReturns.getViews()
          .then((views) => {
            return combineWithRemoteInfo(views);
          })
          .then((combinedViews) => {
            res.send(combinedViews);
          });
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
        res.send(`User ${req.params.user_id} viewed id ${req.params.viewed_id}`);
      });
  });

  router.post('/:user_id/tags/', (req, res) => {

    db.Tag.create({
      name: 'test tag name',
      rated: true,
      UserId: req.params.user_id,
      // need to hardcode businessId for now
      BusinessId: 1,
    });
    // need to hardcode businessId for now
    res.send(`User ${req.params.user_id} created tag about business${req.params.business_id}`);
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
            res.send(combinedTags);
          });
      });
  });

  return router;
};
