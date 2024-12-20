import { responseError } from "./response.helper.js";

export class BadRequestException extends Error {
  constructor(message = "BadRequestException") {
    super(message);
    this.code = 400;
  }
}

export class ForbiddenException extends Error {
  constructor(message = "FobiddenException") {
    super(message);
    this.code = 403;
  }
}

export const MiddlewareError = (err, req, res, next) => {
  {
    const errorData = responseError(err.message, err.code, err.stack);
    res.status(errorData.code).json(errorData);
  }
};
