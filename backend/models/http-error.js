class HttpError extends Error {
  constructor(mes, errorCode) {
    super(mes);
    this.code = errorCode;
  }
}
