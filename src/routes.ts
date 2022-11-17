import helmet from 'helmet';
import homeController from './controllers/home.controller';
import morgan from 'morgan';  
import userController from './controllers/users.controller';
import express ,{ Express } from 'express'

export const routes =(app: Express) =>{
    app.use(express.json())
    app.use(helmet());
    app.use(morgan('combined'))
    app.use('/', homeController);
    app.use('/users', userController);
}