const express = require('express');

const router = express.Router();

const db = require('../models');

module.exports = () => {
  router.get('/', (req, res) => {
    db.Tag.findAll()
      .map(tag => tag.get('name'))
      .reduce((unique, elem) => (unique.includes(elem) ? unique : [...unique, elem]), [])
      .then((uniqueNameArray) => {
        res.send(uniqueNameArray);
      });
  });

  return router;
};
