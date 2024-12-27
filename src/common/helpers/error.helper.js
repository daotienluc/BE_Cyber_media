import { responseError } from "./response.helper.js";
import jwt from "jsonwebtoken";

export class BadRequestException extends Error {
  constructor(message = "BadRequestException") {
    super(message);
    this.code = 400;
  }
}

export class UnAuthorizationException extends Error {
  constructor(message = "UnAuthorizationException") {
    super(message);
    this.code = 401;
  }
}

export class ForbiddenException extends Error {
  constructor(message = "FobiddenException") {
    super(message);
    this.code = 403;
  }
}

export const MiddlewareError = (err, req, res, next) => {
  if (err instanceof jwt.TokenExpiredError) {
    err.code = 403;
  }

  if (err instanceof jwt.JsonWebTokenError) {
    err.code = 401;
  }

  {
    const errorData = responseError(err.message, err.code, err.stack);
    res.status(errorData.code).json(errorData);
  }
};
