
import { NextFunction, Response, Request } from "express";
import winston from "winston";

function handleErrorMiddleware(err: Error, request: Request, response: Response, next: NextFunction) {
    winston.error({
        message    : err.message,
        stack      : err.stack,
        name       : err.name,
        occuredTime: new Date().toLocaleString(),
    });
    response.status(500).send('Something went wrong!')
}

export { handleErrorMiddleware }