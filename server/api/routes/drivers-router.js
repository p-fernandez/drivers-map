'use strict';

const express = require('express');

const driversController = require('../controllers/drivers-controller');

const router = express.Router();

router.get('/', driversController.fetchAll);

module.exports = router;
