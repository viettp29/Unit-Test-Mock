class CustomError extends Error {
  constructor(message, statusCode, status) {
    super(message);

    this.statusCode = statusCode;
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default CustomError;
