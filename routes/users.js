const express = require('express');

const router = express.Router();

const db = require('../models');

module.exports = () => {
  router.get('/', (req, res) => {
    db.User.findAll()
      .then((result) => {
        res.send(result);
      });
  });
  router.post('/', (req, res) => {
    db.User.create();
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
            res.status(200).send(favourites);
          });
      });
  });
  router.post('/:user_id/favourites/', (req, res) => {
    // * create row in user_fav for user_id and business_id
    db.User_fav_business.create({
      UserId: req.params.user_id,
      BusinessId: req.params.business_id,
      is_favourite: true,
    });
    // return result to res.send
    res.send(`User ${req.params.user_id}'s favourited business with id ${req.params.business_id}`);
  });

  router.post('/:user_id/favourites/:favourite_id', (req, res) => {
    // on req, delete /:user_id/favourites/:${req.params.favourite_id}
    db.User_fav_business.destroy({
      where: {
        id: req.params.favourite_id,
      },
    }).then(() => {
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
      // send res saying !!created
      res.send(`User ${req.params.user_id} viewed business ${req.params.business_id}`);
    });
  });
  router.get('/:user_id/views', (req, res) => {
    res.send(`User ${req.params.user_id}'s view history`);
  });
  router.post('/:user_id/views/:view_id', (req, res) => {
    res.send(`User ${req.params.user_id}'s view with id ${req.params.view_id}`);
  });

  return router;
};
