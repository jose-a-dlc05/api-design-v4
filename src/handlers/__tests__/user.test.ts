import * as user from '../user';
describe('User handler', () => {
	// it('should do something when something happens', () => {
	// 	expect(1).toBe(1);
	// });
	it('should create a new user', async () => {
		const req = { body: { username: 'hello', password: 'world' } };
		const res = {
			json({ token }) {
				expect(token).toBeTruthy();
			},
		};

		const newUser = await user.createNewUser(req, res, () => {});
	});
});
