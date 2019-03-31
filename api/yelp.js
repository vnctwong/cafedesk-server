const axios = require('axios');
require('dotenv').config();

function search(querry, longitude = -123.1207, latitude = 49.2827) {
  axios.get(`https://api.yelp.com/v3/businesses/search?term=${querry}&latitude=${latitude}&longitude=${longitude}`, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_KEY}`
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

module.exports = {
  search
};
