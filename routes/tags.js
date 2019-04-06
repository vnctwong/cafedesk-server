const express = require('express');

const router = express.Router();

const db = require('../models');

module.exports = () => {
  router.get('/', (req, res) => {
    db.Tag.findAll()
      .then((result) => {
        res.send(result);
      });
  });

  return router;
};
