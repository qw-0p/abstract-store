import { NextFunction, Request, Response } from 'express';
import schemas from '../validations';
import ValidationError from '@errors/ValidationError';

const validationOptions = {
  abortEarly: false,
  allowUnknown: false,
  stripUnknown: false,
};

interface IValidationError {
  message: string;
  type: string;
}

export const validationMiddleware =
  (path: string) => (req: Request, res: Response, next: NextFunction) => {
    const schema = schemas[path];
    if (req.method === 'OPTIONS') {
      return next();
    }
    const { error } = schema.validate(req.body, validationOptions);

    if (error) {
      throw new ValidationError({
        code: 422,
        message: 'Failed to validate request',
        logging: true,
        context: {
          original: error._original,
          details: error.details.map(({ message, type }: IValidationError) => ({
            message: message.replace(/['"]/g, ''),
            type,
          })),
        },
      });
    }

    next();
  };
