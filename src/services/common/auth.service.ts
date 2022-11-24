
import * as jwt from 'jsonwebtoken';
import { environment } from '../../config/environment';

/**
 * Generate token using only registerd user email
 * @param {string} email:string
 * @returns {string} token:string
 */

export const generateAuthToken = (email: string) => {
    const token = jwt.sign({ email }, environment.JWT_TOKEN_KEY);
    return token;
}