const express = require('express');
const router = express.Router();

const User = require('../controllers/user');
const User_fav_business = require('../controllers/user_fav_business');

module.exports = () => {
  router.get('/', (req, res) => {
    User.findAll()
      .then((result) => {
        res.send(result)
      })
  });
  router.get('/:user_id', (req, res) => {
    // * pull row in db where id = ${req.params.user_id}
    // model(search by id)
    User.findUserById(req.params.user_id)
      // get a search result/obj
      .then((result) => {
        // res.send(result)
        res.send(result)
      })
  });
  router.get('/:user_id/favourites', (req, res) => {
    // * find all favs for user id
    // look favs table, return User_fav_business where userId = req.params.user_id
    User_fav_business.findByUserId(req.params.user_id)
      // res.send(search results)
      .then((result) => {
        res.send(result)
      })
    // res.send(`User ${req.params.user_id}'s favourites`);
  });
  router.get('/:user_id/views', (req, res) => {
    res.send(`User ${req.params.user_id}'s view history`);
  });

  router.post('/', (req, res) => {
    User.create();
    res.send(`Created user`);
  });

  router.post('/:user_id/favourites', (req, res) => {
    res.send(`User ${req.params.user_id}'s favourite with id ${req.params.favourite_id}`);
  });
  router.post('/:user_id/favourites/:favourite_id', (req, res) => {
    res.send(`User ${req.params.user_id}'s favourite with id ${req.params.favourite_id}`);
  });

  router.post('/:user_id/views', (req, res) => {
    res.send(`User ${req.params.user_id}'s view with id ${req.params.view_id}`);
  });
  router.post('/:user_id/views/:view_id', (req, res) => {
    res.send(`User ${req.params.user_id}'s view with id ${req.params.view_id}`);
  });

  return router;
}