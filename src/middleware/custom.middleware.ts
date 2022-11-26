import logger from '../extensions/logger.extension';
import { Express } from 'express';
import { handleErrorMiddleware } from './error.middleware';


function customMiddleware(app: Express) { 
    app.use(handleErrorMiddleware);
    logger();
}

/**
 * Named Export
 */
export { customMiddleware };