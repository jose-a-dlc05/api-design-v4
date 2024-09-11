import { Router } from 'express';
import { handleInputErrors } from './utils/middleware';
import { productValidator } from './utils/validators/productValidator';
import {
	getProduct,
	getProducts,
	createProduct,
	updateProduct,
	deleteProduct,
} from './handlers/product';
import {
	getUpdates,
	getOneUpdate,
	createUpdate,
	updateUpdate,
	deleteUpdate,
} from './handlers/update';
import {
	updatePostValidator,
	updatePutValidator,
} from './utils/validators/updateValidator';

const router = Router();

/**
 * Product
 */
router.get('/product', getProducts);

router.get('/product/:id', getProduct);

router.post('/product', productValidator, handleInputErrors, createProduct);

router.put('/product/:id', productValidator, handleInputErrors, updateProduct);

router.delete('/product/:id', deleteProduct);

/**
 * Update
 */

router.get('/update', getUpdates);

router.get('/update/:id', getOneUpdate);

router.post('/update', updatePostValidator, handleInputErrors, createUpdate);

router.put('/update/:id', updatePutValidator, handleInputErrors, updateUpdate);

router.delete('/update/:id', deleteUpdate);

/**
 * UpdatePoint
 */

// router.get('/updatepoint', (req, res) => {});

// router.get('/updatepoint/:id', (req, res) => {});

// router.post('/updatepoint', (req, res) => {});

// router.put('/updatepoint/:id', (req, res) => {});

// router.delete('/updatepoint/:id', (req, res) => {});

// this is the sub-router error handler
router.use((err, req, res, next) => {});

// handling async errors outside of express
// process.on

export default router;
