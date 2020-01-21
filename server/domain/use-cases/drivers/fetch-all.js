'use strict';

const driversExternalRepository = require('../../repositories/external/drivers-external-repository');
const {
  validateFetchAll
} = require('../../applications/validators/drivers-validator');

const execute = async(latitude, longitude, count = null) => {
  validateFetchAll(latitude, longitude, count);
  return driversExternalRepository.fetchAll(latitude, longitude, count);
};

module.exports = execute;
