// blocking
// const fs = require('fs');
const path = require('path');
// const result = fs.readFileSync(path.join(__dirname, 'package.json'));
// console.log(result);
// console.log('hi');

// nonBlocking
const fsPromise = require('fs/promises');
const read = async () => {
	const result = fsPromise.readFile(path.join(__dirname, 'package.json'));
	console.log(result);
	return result;
};
read().then((f) => console.log(f));
console.log('hi_async');

//child_process
