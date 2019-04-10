const axios = require('axios');
const db = require('../models');
require('dotenv').config();

const auth = `Bearer ${process.env.YELP_KEY}`;

// build and send search request to yelp api, returns promise
function search(query, longitude = -123.1207, latitude = 49.2827) {
  return axios.get(`https://api.yelp.com/v3/businesses/search?term=${query}&latitude=${latitude}&longitude=${longitude}`, {
    headers: {
      Authorization: auth,
    },
  });
}

// retrieve specific business's data
function getBusiness(yelp_id) {
  return axios.get(`https://api.yelp.com/v3/businesses/${yelp_id}`, {
    headers: {
      Authorization: auth,
    },
  });
}

// only used when user clicks business directly, marks as being viewed
function getBusinessDetailed(yelp_id, business_id = 1, user_id = 1) {
  return getBusiness(yelp_id)
    .finally(() => {
      db.User_viewed_business.create({
        UserId: user_id,
        BusinessId: business_id,
        viewed: true,
      });
    });
}

module.exports = {
  search,
  getBusiness,
  getBusinessDetailed,
};
