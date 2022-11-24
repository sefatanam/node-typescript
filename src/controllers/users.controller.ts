import { LoginUser, RegisterUser } from '../services/users.service';
import express, { Response, Request } from 'express';
const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
    const [status, result] = await RegisterUser(req);
    if ('token' in result) {
        res.header('x-auth-token', result.token)
    }
    res.status(status).send(result);
})


router.post("/login", async (req: Request, res: Response) => {
    const [status, result] = await LoginUser(req);
    if ('token' in result) {
        res.header('x-auth-token', result.token);
    }
    res.status(status).send(result);
})
export default router;