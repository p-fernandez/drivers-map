'use strict';

const Joi = require('@hapi/joi');

const BadRequestError = require('../../interfaces/errors/bad-request-error');

const RESOURCE = 'drivers-validator';

const schemaPayload = Joi.object({
  count: Joi.number().allow(null),
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
});

const errorThrower = (error) => {
  if (error) {
    const { message } = error;
    throw new BadRequestError(message, RESOURCE);
  }
};

const validateFetchAll = (latitude, longitude, count) => {
  const { error } = schemaPayload.validate({
    latitude,
    longitude,
    count
  });
  errorThrower(error);
};

module.exports = {
  validateFetchAll,
};
