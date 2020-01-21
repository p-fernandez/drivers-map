'use strict';

const splytGateway = require('./splyt-gateway/drivers');

const fetchAll = async(latitude, longitude, count) => splytGateway.fetchAll(latitude, longitude, count);

module.exports = {
  fetchAll,
};
