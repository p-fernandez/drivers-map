const STATUS_CODE = 404;

class NotFoundError extends Error {
  constructor(message, resource) {
    super();
    this.name = 'NotFoundError';
    this.message = message || 'Not found error';
    this.resource = resource || 'Undefined';
    this.stack = (new Error()).stack;
    this.statusCode = STATUS_CODE;
  }
}

export default NotFoundError;
export {
  STATUS_CODE as statusCode,
}
