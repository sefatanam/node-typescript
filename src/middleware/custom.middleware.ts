import { Application } from 'express';

import logger from '../extensions/logger.extension';
import { handleErrorMiddleware } from './error.middleware';

function customMiddleware(app: Application) {
    app.use(handleErrorMiddleware);
    logger();
}

/**
 * Named Export
 */
export { customMiddleware };