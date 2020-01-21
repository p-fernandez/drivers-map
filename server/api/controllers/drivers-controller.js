'use strict';

const {
  fetchAllCommand,
} = require('../../domain/use-cases/drivers');
const {
  domainErrorAdapter,
  errorResponseAdapter,
} = require('../interfaces/adapters');
const driversResponseAdapter = require('../interfaces/adapters/drivers/drivers-response-adapter');

async function fetchAll(req, res) {
  try {
    const {
      query: {
        latitude,
        longitude,
        count,
      },
    } = req;

    const responseData = await fetchAllCommand(latitude, longitude, count);

    return res.status(200).json(driversResponseAdapter(responseData));
  } catch (error) {
    return errorResponseAdapter(res, domainErrorAdapter(error));
  }
}

module.exports = {
  fetchAll,
};
