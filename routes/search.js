const express = require('express');
const router = express.Router();

module.exports = () => {
  router.get('/:keyword', (req, res) => {
    res.send(`Search for: ${req.params.keyword}`);
  });

  return router;
}
