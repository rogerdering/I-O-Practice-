var country = require ("./app")

country.info("./countries.json", function(data) {
	console.log(data)
});
