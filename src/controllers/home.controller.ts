import express, { NextFunction, Request, Response } from 'express';

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    res.send({ message: "Home Controller Execute" });
})


export default router;