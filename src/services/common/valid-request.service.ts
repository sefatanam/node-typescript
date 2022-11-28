import { ClassConstructor, plainToClass, plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

import { UserRequest } from '../../Domain/Request/user.request';

/* export const ValidateRequestObject= async (request: Request, requestObject: any): Promise<[number, any]> => {
    let requestObjectInstance = plainToClass(requestObject, request.body);
    let errors = await validate(requestObjectInstance);
    if (errors.length) {
        return [400, { message: errors }];
    }
    return [200, requestObjectInstance];
} */


// ValidateRequestObject generic
/* export const ValidateRequest = async <D extends object, T extends keyof D>(
    ...args: Extract<T, D> extends D ? [classObject: T, requestBody: D] : never
): Promise<[T, ValidationError[]]> => {

    let classValue = plainToClass(args[0], args[1]);
    let errors = await validate(classValue);

    return [classValue, errors];
};
 */

export const ValidateRequest = async <T,V>(classObject:any, requestValue:any) => {
    let classValue = plainToInstance(classObject, requestValue);
    let errors = await validate(classValue)
    return [classValue, errors ];
};
