import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

export const ValidateRequest = async <T, V>(
    classObject: ClassConstructor<T>,
    requestValue: V[]
): Promise<[T, ValidationError[]]> => {
    const classValue = plainToInstance(classObject, requestValue) as T;
    const errors = await validate(classValue as object)
    return [classValue, errors]
}
