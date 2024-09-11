import { body } from 'express-validator';

export const productValidator = [
	body('name')
		.isString()
		.withMessage('Name must be a string')
		.isLength({ min: 3 })
		.withMessage('Name must be at least 3 characters long')
		.isLength({ max: 15 })
		.withMessage('Name must be at most 15 characters long'),
];
