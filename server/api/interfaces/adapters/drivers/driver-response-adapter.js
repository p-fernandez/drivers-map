'use strict';

const apiResponseItem = require('../api-response-item-adapter');

const ENTITY = 'drivers';

const driverResponseAdapter = (driver) => {
  const {
    id,
    ...attributes
  } = driver;

  return apiResponseItem(ENTITY, id, attributes);
};

module.exports = driverResponseAdapter;
