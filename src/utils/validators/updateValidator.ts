import { body } from 'express-validator';

export const updatePutValidator = [
	body('title').optional(),
	body('body').optional(),
	body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
	body('version').optional(),
];
export const updatePostValidator = [
	body('title').optional(),
	body('body').optional(),
	body('productId').exists().isString(),
];
