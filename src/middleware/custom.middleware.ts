import { handleErrorMiddleware } from './error.middleware';
import { Express } from 'express'
import logger from '../extensions/logger.extension';


function customMiddleware(app: Express) { 
    app.use(handleErrorMiddleware);
    logger();
}

/**
 * Named Export
 */
export { customMiddleware };