import merge from 'lodash.merge';
import { env } from 'process';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const stage = process.env.STAGE || 'local';
console.log('stage:', stage);
let envConfig;

if (stage === 'production') {
	envConfig = require('./prod').default;
} else if (stage === 'testing') {
	envConfig = require('./testing').default;
} else {
	envConfig = require('./local').default;
}

const defaultConfig = {
	stage,
	dbUrl: process.env.DB_URL,
	jwtSecret: process.env.JWT_SECRET,
	port: process.env.PORT,
	logging: false,
};

export default merge(defaultConfig, envConfig);
