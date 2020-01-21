const axios = require('axios');

const config = require('../../../../config');

// TODO: Url domain set by environment through .env config.
const baseURL = config.get('splyt:baseURL');

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

module.exports = axiosInstance;
