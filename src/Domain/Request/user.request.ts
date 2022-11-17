
import { IsEmail, MaxLength, MinLength } from 'class-validator';
import * as jwt from 'jsonwebtoken';
import { environment } from '../../config/environment';

export class UserRequest {
    @MinLength(4, { message: "Username should be 4 character minimum" })
    @MaxLength(20, { message: "Username should be between 4 to 20 character maximum" })
    username!: string;

    @IsEmail()
    email!: string;

    @MinLength(11, { message: 'Contact number should be exact 11 characters' })
    contactNo!: string;

    @MinLength(4, { message: "Password should be 4 character minimum" })
    password!: string;

    generateAuthToken() {
        const token = jwt.sign({ email: this.email }, environment.JWT_TOKEN_KEY);
        return token;
    }

}