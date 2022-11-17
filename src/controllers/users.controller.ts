import { LoginUser, RegisterUser } from '../services/users.service';
import express, { Response, Request } from 'express';
import { UserResponse } from '../Domain/Response/user.response';
const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
    const [status, result] = await RegisterUser(req);
    if (result instanceof UserResponse) { // Problem related to #2
        res.header('x-auth-token', result.token)
    }
    res.status(status).send(result);
})


router.post("/login", async (req: Request, res: Response) => {
    const [status, result] = await LoginUser(req);
    if (typeof (result) ==='string') { // Problem related to #2
        res.header('x-auth-token', result);
    }
    res.status(status).send(result);
})
export default router;