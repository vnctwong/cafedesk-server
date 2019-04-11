const express = require('express');
const {
  getTags
} = require('../helpers/getTags');

const router = express.Router();


module.exports = () => {
  // returns all tags currently in use
  router.get('/', (req, res) => {
    console.log('tags');

    getTags()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch(error => res.status(500).send(error));
  });

  return router;
};
