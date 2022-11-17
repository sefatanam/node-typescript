import { RegisterUser, SaveUser } from '../services/users.service';
import express, { NextFunction, Response, Request } from 'express';
import { UserResponse } from '../Domain/Response/user.response';

const router = express.Router();

router.get("/", async (req: Request, res: Response, _: NextFunction) => {
       const result = await SaveUser();
       res.send(result);
})

router.post("/", async (req: Request, res: Response, _: NextFunction) => {
    const [status, result] = await RegisterUser(req);
    if (result instanceof UserResponse) {
        res.header('x-auth-token', result.token)
    } 
    res.status(status).send(result);
})

export default router;