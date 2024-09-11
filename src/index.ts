import http from 'http';
import { config } from 'process';

const server = http.createServer(async (req, res) => {
	if (req.method === 'GET' && req.url === '/') {
		console.log('Woahhh from server');
		res.end();
	}
});

server.listen(3001, () => {
	console.log('Server running on port 3001');
});
