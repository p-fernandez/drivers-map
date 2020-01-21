'use strict';

const driversRouter = require('./drivers-router');

const ROUTE_CONTEXT = '/api';

const routes = (app) => {
  app.use(`${ROUTE_CONTEXT}/drivers`, driversRouter);
};

module.exports = routes;
