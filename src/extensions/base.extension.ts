import { handleErrorMiddleware } from '../middleware/error.middleware';
import express, { Express } from 'express'
import helmet from 'helmet'; 
import logger from './logger.extension';
import morgan from 'morgan'; 


function baseExtensions(app: Express) {
    app.use(handleErrorMiddleware);
    app.use(express.json())
    app.use(helmet());
    app.use(morgan('combined'))
    logger();
}

/**
 * Named Export
 */
export { baseExtensions };