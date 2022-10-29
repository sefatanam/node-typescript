import home from '../routers/home'
import { Express } from 'express'


export default function (app: Express) {
    app.use('/', home);
}