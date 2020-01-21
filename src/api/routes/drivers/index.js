import Http from 'api/http';

const SERVICE_PATH = '/api/drivers';

const getDrivers = async (latitude, longitude, count = null) => {
  let url = `${SERVICE_PATH}?latitude=${latitude}&longitude=${longitude}`

  if (count) {
    url = `${url}&count=${count}`;
  }

  return Http.get(url);
}

export {
  getDrivers,
};
