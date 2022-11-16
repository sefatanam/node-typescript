import { environment } from "../config/environment";
import { NextFunction, Response, Request } from "express";
import winston from "winston";

function handleErrorMiddleware(err: Error, _: Request, response: Response, __: NextFunction) {
    winston.error({
        message    : err.message,
        stack      : err.stack,
        name       : err.name,
        occuredTime: new Date().toLocaleString(),
    });
    response.status(500).send(environment.serverErrorMessage)
}

export { handleErrorMiddleware }