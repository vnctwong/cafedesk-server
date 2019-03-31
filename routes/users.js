const express = require('express');
const router = express.Router();

module.exports = () => {

  // returns all categories for user
  router.get('/', (req, res) => {
    res.send('boop');
  });
  router.get('/:user_id', (req, res) => {
    res.send(`User ${req.params.user_id}`);
  });
  router.get('/:user_id/favourites', (req, res) => {
    res.send(`User ${req.params.user_id}'s favourites`);
  });
  router.get('/:user_id/views', (req, res) => {
    res.send(`User ${req.params.user_id}'s view history`);
  });

  // create new category
  router.post('/:user_id/favourites/:favourite_id', (req, res) => {
    res.send(`User ${req.params.user_id}'s favourite with id ${req.params.favourite_id}`);
  });
  router.post('/:user_id/favourites/:view_id', (req, res) => {
    res.send(`User ${req.params.user_id}'s view with id ${req.params.view_id}`);
  });

  return router;
}
