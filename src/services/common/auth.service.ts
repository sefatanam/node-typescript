
import * as jwt from 'jsonwebtoken';
import { environment } from '../../config/environment';

export async function generateAuthToken(email: string) {
    const token = jwt.sign({ email }, environment.JWT_TOKEN_KEY);
    return token;
}