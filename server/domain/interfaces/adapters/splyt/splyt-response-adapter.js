'use strict';

const splytResponseAdapter = (response) => {
  const { data } = response;
  const { pickup_eta: pickupEta, drivers } = data;

  return {
    pickupEta,
    drivers,
  };
};

module.exports = splytResponseAdapter;
