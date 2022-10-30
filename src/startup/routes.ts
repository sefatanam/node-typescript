import home from '../routers/home'
import users from '../routers/users'
import { Express } from 'express'


export default function (app: Express) {
    app.use('/', home);
    app.use('/users', users);
}