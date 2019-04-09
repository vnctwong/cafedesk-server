const express = require('express');
const db = require('../models');

const router = express.Router();


module.exports = () => {
  router.get('/', (req, res) => {
    db.Tag.findAll()
      .map(tag => tag.get('name'))
      .reduce((unique, elem) => (unique.includes(elem) ? unique : [...unique, elem]), [])
      .then((uniqueNameArray) => {
        res.status(200).send(uniqueNameArray);
      });
  });

  return router;
};
