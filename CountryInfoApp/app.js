fs = require('fs')

function extractfile (filename, callback) {
	fs.readFile(filename, 'utf8', function (err, data) {
		if(err) {
			console.log(err);
			throw err;
		} else {
			callback(JSON.parse(data))
		}
	});
};

module.exports.info = extractfile
