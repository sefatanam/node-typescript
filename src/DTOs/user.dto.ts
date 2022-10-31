
import { IsEmail, MaxLength, Min, MinLength } from 'class-validator';

export class UserDto {
    @MinLength(4, { message: "Username should be 4 character minimum" })
    @MaxLength(20, { message: "Username should be between 4 to 20 character maximum" })
    username!: string;

    @IsEmail()
    email!: string;
}