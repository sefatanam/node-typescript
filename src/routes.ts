import express, { Application, Express } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import homeController from './controllers/home.controller';
import userController from './controllers/users.controller';

export const routes =(app: Application) =>{
    app.use(express.json())
    app.use(helmet());
    app.use(morgan('combined'))
    app.use('/', homeController);
    app.use('/users', userController);
}