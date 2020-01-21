'use strict';

/**
 * This looks overkill but with a factory pattern this would a single function
 * to apply the appropriate adapter to any desired entity
 * EntityAdapter = (entities) => apiResponse(entities.map(entityAdapter))
 */
const driverResponseAdapter = require('./driver-response-adapter');

const apiResponse = require('../api-response-adapter');

const driversResponseAdapter = (drivers) => apiResponse(drivers.map(driverResponseAdapter));

module.exports = driversResponseAdapter;
