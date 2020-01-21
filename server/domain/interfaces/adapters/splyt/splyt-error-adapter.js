'use strict';

const {
  BadGatewayError,
  NotFoundError,
  InternalServerError,
} = require('../../errors');

const RESOURCE = 'Splyt API';

const splytErrors = {
  404: NotFoundError,
  502: BadGatewayError,
};

const splytErrorAdapter = (err) => {
  const {message, response} = err;

  if (!response || Object.keys(response).length === 0) {
    return new InternalServerError(message, RESOURCE);
  }

  const {status, statusText} = response;
  const ReceivedError = splytErrors[status];

  if (!ReceivedError) {
    return new InternalServerError(statusText, RESOURCE);
  }

  return new ReceivedError(statusText, RESOURCE);
};

module.exports = splytErrorAdapter;
