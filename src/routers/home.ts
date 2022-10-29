import express, { NextFunction, Response, Request, Router, Express } from 'express';

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    res.send("Home Controller Execute");
})


export default router;