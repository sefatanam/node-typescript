
import { IsEmail, MinLength } from 'class-validator'; 

export class LoginRequest {
    @IsEmail()
    email!: string;
    @MinLength(4, { message: "Password should be 4 character minimum" })
    password!: string;
}