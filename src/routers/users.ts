import express, { NextFunction, Response, Request, Router, Express } from 'express';

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    res.send("User Controller Execute");
})


export default router;