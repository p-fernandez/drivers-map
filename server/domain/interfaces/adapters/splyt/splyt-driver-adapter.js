'use strict';

const splytDriverAdapter = (splytDriver) => {
  const {
    driver_id: driverId,
    location,
  } = splytDriver;

  return {
    id: driverId,
    ...(location && Object.keys(location).length > 0 && { location }),
  };
};

module.exports = splytDriverAdapter;
