const axios = require('axios');
require('dotenv').config();

// build and send search request to yelp api, returns promise
function search(query, longitude = -123.1207, latitude = 49.2827) {
  return axios.get(`https://api.yelp.com/v3/businesses/search?term=${query}&latitude=${latitude}&longitude=${longitude}`, {
    headers: {
      Authorization: `Bearer ${process.env.YELP_KEY}`
    },
  });
}

function getBusiness(query) {
  return axios.get(`https://api.yelp.com/v3/businesses/${query}`, {
    headers: {
      Authorization: `Bearer ${process.env.YELP_KEY}`
    },
  });
}

module.exports = {
  search,
  getBusiness
};
