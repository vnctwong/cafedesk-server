const express = require('express');

const router = express.Router();

const db = require('../models');

module.exports = () => {
  router.get('/', (req, res) => {
    db.Tag.findAll()
      //* filter through tags so no duplicate names
      // loop through tags
      .map(tag => tag.get('name'))
      // if !name[i], push/append
      .reduce((unique, elem) => (unique.includes(elem) ? unique : [...unique, elem]), [])
      // send new array 
      .then((uniqueNameArray) => {
        res.send(uniqueNameArray);
      });
  });

  return router;
};
