const STATUS_CODE = 500;

class InternalServerError extends Error {
  constructor(message, resource) {
    super();
    this.name = 'InternalServerError';
    this.message = message || 'Unexpected error';
    this.resource = resource || 'Undefined';
    this.stack = (new Error()).stack;
    this.statusCode = STATUS_CODE;
  }
}

export default InternalServerError;
export {
  STATUS_CODE as statusCode,
}
