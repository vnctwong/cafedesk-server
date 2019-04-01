const Business = require('../models').Business

module.exports = {
  create(req, res) {
    return Business
      .create({
        name: req.body.name,
      })
      .then(business => {
        res.status(200).send(business);
      })
      .catch(error => {
        res.status(400).send(error);
      });
  },

  getBusiness(query) {
    console.log(query);
    return Business.findAll({
      where: {
        name: query
      }
    });
  }
}
