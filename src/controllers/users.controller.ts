import { RegisterUser, SaveUser, UserDtoWithToken } from '../services/users.service';
import express, { NextFunction, Response, Request } from 'express';
import { UserDto } from '../DTOs/user.dto';

const router = express.Router();

router.get("/", async (req: Request, res: Response, _: NextFunction) => {
       const result = await SaveUser();
       res.send(result);
})

router.post("/", async (req: Request, res: Response, _: NextFunction) => {
    const [status, result] = await RegisterUser(req);
    // @ts-ignore
    res.header('x-auth-token',result['token'])
    res.status(status).send(result);
})









export default router;