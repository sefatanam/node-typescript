import 'express-async-errors';
import environment from './config/environment';
import express, { Express } from 'express';
import { routes } from './extensions/routes';
import { baseExtensions } from './extensions/base.extension';

const app: Express = express();

/**
 * App Builder Installation
 */
baseExtensions(app)
routes(app);


/**
 * Running Node App
 */
app.listen(environment()?.port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${environment()?.port}`);
});