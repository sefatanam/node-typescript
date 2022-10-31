import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import express, { NextFunction, Response, Request, Router, Express } from 'express';
import { STATUS_CODES } from 'http';
import { UserDto } from '../DTOs/user.dto';
import { SaveUser } from '../services/users.service';

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const result = await SaveUser();
    res.send(result);
})

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    let userDto = plainToClass(UserDto, req.body);
    let errors = await validate(userDto);
    // Now process user login with jwt

    if (errors.length > 0) {
        return res.status(400).send(errors)
    } 
    return res.status(201).send({...userDto});

})









export default router;