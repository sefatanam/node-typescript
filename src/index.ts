import 'express-async-errors';
import environment from './config/environment';
import errorHandler from './middleware/errorHandler';
import express, { Express } from 'express';
import helmet from 'helmet';
import logger from './startup/logger';
import morgan from 'morgan';
import routes from './startup/routes'; 

const app: Express = express();

app.use(express.json())
app.use(helmet());
app.use(morgan('combined'))
routes(app); 
logger();
app.use(errorHandler);

app.listen(environment()?.port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${environment()?.port}`);
});