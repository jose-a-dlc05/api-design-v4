import express from 'express';
import morgan from 'morgan';
import router from './router';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { protect } from './utils/auth';
import { createNewUser, signIn } from './handlers/user';
import config from './config';
dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.status(200);
	res.json({ message: 'hello' });
});

app.use('/api', protect, router);
app.post('/user', createNewUser);
app.post('/signin', signIn);

app.listen(config.port, () => {
	console.log(`Server running on port ${config.port}`);
});

app.use((err, req, res, next) => {
	console.log(err);
	if (err.code === 'P2002') {
		res.json({ message: 'Username already exists' });
	}
	res.json({ message: `had an error: ${err.message}` });
});

export default app;
