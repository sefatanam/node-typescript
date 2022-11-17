import { PrismaClient, User } from "@prisma/client";
import { plainToClass } from "class-transformer";
import { UserRequest } from "../Domain/Request/user.request";
import { Request } from 'express';
import { validate } from "class-validator";
import * as bcrypt from "bcrypt";
import { UserResponse } from "../Domain/Response/user.response";

const prisma = new PrismaClient();

export async function SaveUser(): Promise<User> {
    const newUser = await prisma.user.create({
        data: {
            email: "sefatanam@gmail.cow",
            username: "sefatanam",
            contactNo: '01010101011',
            password: '1234'
        }
    })
    return newUser;
}

export async function RegisterUser(request: Request): Promise<[number, UserResponse | { message: any }]> {
    let userDto = plainToClass(UserRequest, request.body);
    let errors = await validate(userDto);
    if (errors.length) {
        return [400, { message: errors }];
    }
    let isUserExist = await prisma.user.findFirst({
        where: {
            email: userDto.email
        }
    })
    if (isUserExist) {
        return [400, { message: "User already registered." }]
    }
    const salt = await bcrypt.genSalt(5);
    userDto.password = await bcrypt.hash(userDto.password, salt);
    const newUser = await prisma.user.create({
        data: userDto
    })
    if (newUser) {
        const token = userDto.generateAuthToken();
        return [200, { ...userDto, token } as UserResponse];
    }
    return [400, { message: "Something went wrong !" }]
}