const express = require('express');
const {
  Op
} = require('Sequelize');
const db = require('../models');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    // given a req array
    const reqArray = ['tagName1', 'tagName2', 'tagName3'];
    // loop through db
    db.Tag.findAll({
        where: {
          name: {
            // find all matching tags
            [Op.or]: reqArray,
          },
        },
      })
      // create mapArray of associated BusinessId
      .map(tag => tag.get('BusinessId'))
      .reduce((unique, item) => {
        return unique.includes(item) ? unique : [...unique, item];
      }, [])
      .then((businessIdArray) => {
        db.Business.findAll({
            where: {
              id: {
                [Op.or]: businessIdArray,
              },
            },
          })
          .then((businessArray) => {
            res.send(businessArray);
          });
      });


    // res.send('Your recommendations!');
  });

  return router;
};
