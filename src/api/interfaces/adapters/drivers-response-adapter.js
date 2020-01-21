const driverResponseAdapter = (driver) => {
  const {id, attributes} = driver;
  const {location} = attributes;

  return {
    id,
    location,
  }
};

const driversResponseAdapter = (drivers) => drivers.map(driverResponseAdapter);

export default driversResponseAdapter;
