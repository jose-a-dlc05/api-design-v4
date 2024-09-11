import prisma from '../db';
import { comparePasswords, createJWT, hashPassword } from '../utils/auth';

export const createNewUser = async (req, res, next) => {
	let user;
	try {
		user = await prisma.user.create({
			data: {
				username: req.body.username,
				password: await hashPassword(req.body.password),
			},
		});

		const token = createJWT(user);
		res.json({ token });
	} catch (err) {
		err.type = 'input';
		next(err);
	}
};

export const signIn = async (req, res) => {
	const user = await prisma.user.findUnique({
		where: {
			username: req.body.username,
		},
	});
	if (!user) {
		res.status(401).json({ message: 'Invalid credentials' });
		return;
	}
	const valid = await comparePasswords(req.body.password, user.password);
	if (!valid) {
		res.status(401).json({ message: 'Invalid credentials' });
		return;
	}
	const token = createJWT(user);
	res.json({ token });
};
