import 'express-async-errors';

import express, { Application } from 'express';

import { environment } from './config/environment';
import { customMiddleware } from './middleware/custom.middleware';
import { routes } from './routes';

export default function createServer() {
    const app: Application = express();
    routes(app);
    customMiddleware(app)
    return app;
}

createServer().listen(environment.PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${environment.PORT}`);
});