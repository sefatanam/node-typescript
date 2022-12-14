import { PrismaClient, User } from "@prisma/client";
import { plainToClass } from "class-transformer";
import { UserRequest } from "../Domain/Request/user.request";
import { Request } from 'express';
import { validate } from "class-validator";
import * as bcrypt from "bcrypt";
import { UserResponse } from "../Domain/Response/user.response";
import { generateAuthToken } from "./common/auth.service";
import { LoginRequest } from "../Domain/Request/login.request";

const prisma = new PrismaClient();

const GetUser = async (email: string): Promise<User | null> => await prisma.user.findFirst({ where: { email } })
const CreateUser = async (data: UserRequest): Promise<User> => await prisma.user.create({ data })

export const RegisterUser = async (request: Request): Promise<[number, UserResponse | { message: any }]> => {
    let userRequest = plainToClass(UserRequest, request.body);
    let errors = await validate(userRequest);

    if (errors.length) {
        return [400, { message: errors }];
    }
    const isUserExist = await GetUser(userRequest.email);

    if (isUserExist) {
        return [400, { message: "User already registered." }]
    }
    const salt = await bcrypt.genSalt(5);
    userRequest.password = await bcrypt.hash(userRequest.password, salt);

    const newUser = await CreateUser(userRequest);
    if (newUser.id) {
        const token = await generateAuthToken(userRequest.email);
        return [200, { ...userRequest, token }];
    }
    return [400, { message: "Something went wrong." }]
}


export const LoginUser = async (request: Request): Promise<[number, { token: string } | { message: any }]> => {
    let loginRequest = plainToClass(LoginRequest, request.body);
    let errors = await validate(loginRequest);
    if (errors.length) {
        return [400, { message: errors }];
    }
    let user = await GetUser(loginRequest.email);
    if (!user) {
        return [400, { message: "User not found." }]
    }

    let validatePassword = await bcrypt.compare(loginRequest.password, user.password);
    if (!validatePassword) return [400, { message: "Invalid email or password." }];

    const token = await generateAuthToken(user.email);
    return [200, { token }];
}