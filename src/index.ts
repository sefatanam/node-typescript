import 'express-async-errors'; 
import express, { Express } from 'express';
import { routes } from './extensions/routes';
import { customMiddleware } from './middleware/custom.middleware';
import { environment } from './config/environment';
const app: Express = express();
/**
 * App Builder Installation
 */
routes(app);
customMiddleware(app)


/**
 * Running Node App
 */
app.listen(environment.PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${environment.PORT}`);
});