import errors from 'api/interfaces/errors';

async function responseBuilderSuccess(response) {
  const { data } = response || {};
  return data;
}

async function responseBuilderError(error) {
  const { response } = error;
  const { status, statusText } = response;
  const ApiError = errors[status] || errors[500];

  throw new ApiError(statusText);
}

export { responseBuilderSuccess, responseBuilderError };
