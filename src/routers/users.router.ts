import express, { NextFunction, Response, Request, Router, Express } from 'express';
import { SaveUser } from '../services/users.service';

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const result = await SaveUser();
    res.send(result);
})


export default router;