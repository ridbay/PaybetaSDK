export class PaybetaError extends Error {
  public status: number;
  public code?: string;
  public data?: any;

  constructor(message: string, status: number, data?: any, code?: string) {
    super(message);
    this.name = "PaybetaError";
    this.status = status;
    this.data = data;
    this.code = code;

    // Maintain V8 stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PaybetaError);
    }
  }
}
