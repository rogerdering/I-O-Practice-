var fs = require ('fs')
var countryname = process.argv[2];

   fs.readFile("./countries.json",'utf8', function (err,data) {
       if(err) {
           throw err;
       } 
      var content = JSON.parse(data)
      content.forEach(function(country)
      {
          if (country.name == countryname)
          {
              console.log("Country: " + country.name)
              console.log("Top Level Domain: " + country.topLevelDomain)
          }
      })
   });