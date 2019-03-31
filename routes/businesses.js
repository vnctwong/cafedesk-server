const express = require('express');
const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    res.send('All businesses');
  });
  router.get('/:business_id', (req, res) => {
    res.send('Specific business');
  });

  return router;
}
