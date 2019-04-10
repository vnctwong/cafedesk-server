# CafeDesk

### Main Contributors: [Vincent Wong](https://github.com/vnctwong), [Yves Desjardins](https://github.com/YvesDesjardins), [Xuenan Wang](https://github.com/xwang1000)

### Relevant repositories:
- Server - https://github.com/xwang1000/cafedesk-server
- Client -  https://github.com/xwang1000/cafedesk-client

## Overview
CafeDesk is a webapp designed to provide users with a more focused view of the coffee shops and tea houses in Vancouver with the aim to make finding an area to study/work in as easy as possible!

## Getting Started (User)
- Hop onto our website at https://cafedesk.netlify.com

## Getting Started (Developer)
- Clone the server
  1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
  2. Update the .env file with your correct local information
  3. Install dependencies: `npm i`
  4. Run migrations: `npx sequelize db:migrate`
  6. Run the seed: `npx sequelize db:seed:all`
  7. Run the server: `npm start`
- Clone the client
  1. Create the `./src/secrets.js` by using `secrets-example.js` as a reference: `cp secrets-example.js secrets.js`
  2. Update the secrets.js file with your correct local information
  3. Install dependencies: `npm i`
  7. Run the server: `npm start`
  8. Visit `http://localhost:3000/`

## Tech Stack

- Dotenv
- ExpressJS
- Node.JS
- Sequelize
- Axios
- React
- React-router
- CircleCI
- Jest
- Heroku

## Known Issues
- Let us know if you identify any!
