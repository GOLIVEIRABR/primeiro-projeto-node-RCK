class AppError {
  public readonly message: string;

  public readonly statusCode: number; // http error

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
