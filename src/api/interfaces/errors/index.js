import InternalServerError, { statusCode as status500 } from './internal-server-error';
import NotFoundError, { statusCode as status404 } from './not-found-error';

const errors = {
  [status404]: NotFoundError,
  [status500]: InternalServerError,
};

export default errors;
