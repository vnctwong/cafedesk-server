const axios = require('axios');
require('dotenv').config();

function search(querry, longitude = -123.1207, latitude = 49.2827) {
  return axios.get(`https://api.yelp.com/v3/businesses/search?term=${querry}&latitude=${latitude}&longitude=${longitude}`, {
    headers: {
      Authorization: `Bearer ${process.env.YELP_KEY}`
    },
  });
}

module.exports = {
  search
};
