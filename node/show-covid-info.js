const fs = require("fs")

fs.readFile('covid-info.json', (err, data) => {
	if(err) {
		console.log(err)
	} else {
		const result = JSON.parse(data)
		const global = result.Global
		const allCountries = result.Countries
		const myanmar = allCountries.find(c => c.Country==="Myanmar")

		console.log("Global:", global, "Myanmar:", myanmar)
	}
})
