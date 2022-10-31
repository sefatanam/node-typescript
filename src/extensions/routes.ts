import homeController from '../controllers/home.controller';
import userController from '../controllers/users.controller';

import { Express } from 'express'

function routes (app: Express) {
    app.use('/', homeController);
    app.use('/users', userController);
}

/**
 * Named Export
 */
export { routes };