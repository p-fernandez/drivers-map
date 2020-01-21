'use strict';

const Http = require('../http');
const splytErrorAdapter = require('../../../interfaces/adapters/splyt/splyt-error-adapter');
const splytDriverAdapter = require('../../../interfaces/adapters/splyt/splyt-driver-adapter');
const splytResponseAdapter = require('../../../interfaces/adapters/splyt/splyt-response-adapter');

const SERVICE_PATH = '/api/drivers';

const fetchAll = async(latitude, longitude, count) => {
  try {
    let url = `${SERVICE_PATH}?latitude=${latitude}&longitude=${longitude}`;

    if (count) {
      url = `${url}&count=${count}`;
    }

    const data = await Http.get(url);

    const {
      drivers,
    } = splytResponseAdapter(data);

    return drivers.map(splytDriverAdapter);
  } catch (err) {
    throw splytErrorAdapter(err);
  }
};

module.exports = {
  fetchAll,
};
