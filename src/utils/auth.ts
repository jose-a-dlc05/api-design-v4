import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const comparePasswords = (password: string, hash: string) => {
	return bcrypt.compare(password, hash);
};

export const hashPassword = (password: string) => {
	return bcrypt.hash(password, 5);
};

export const createJWT = (user: any) => {
	const token = jwt.sign(
		{ id: user.id, username: user.username },
		process.env.JWT_SECRET
	);
	return token;
};

export const protect = (req, res, next) => {
	const bearer = req.headers.authorization;

	if (!bearer) {
		res.status(401).json({ message: 'Not Authorized' });
		return;
	}

	const [, token] = bearer.split(' ');

	if (!token) {
		res.status(401).json({ message: 'Not valid token' });
		return;
	}

	try {
		const user = jwt.verify(token, process.env.JWT_SECRET);
		req.user = user;
		next();
	} catch (error) {
		console.error(error);
		res.status(401).json({ message: 'Not valid token' });
		return;
	}
};
