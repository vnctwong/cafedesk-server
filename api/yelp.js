const axios = require('axios');
require('dotenv').config();

const auth = `Bearer ${process.env.YELP_KEY}`;

// build and send search request to yelp api, returns promise
function search(query, longitude = -123.1207, latitude = 49.2827) {
  return axios.get(`https://api.yelp.com/v3/businesses/search?term=${query}&latitude=${latitude}&longitude=${longitude}&limit=50`, {
    headers: {
      Authorization: auth
    },
  });
}

function getBusiness(query) {
  return axios.get(`https://api.yelp.com/v3/businesses/${query}`, {
    headers: {
      Authorization: auth
    },
  });
}

module.exports = {
  search,
  getBusiness
};
