import express, { Express } from 'express';
import routes from './startup/routes'; 
import environment from './config/environment';

const app: Express = express();

routes(app); 

app.listen(environment()?.port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${environment()?.port}`);
});