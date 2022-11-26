import express, { Express } from 'express';
import { customMiddleware } from './middleware/custom.middleware';
import { environment } from './config/environment';
import { routes } from './routes';
import 'express-async-errors';



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