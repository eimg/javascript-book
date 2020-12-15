// node covid-info.js

const fs = require("fs")
const https = require("https")

https.get("https://api.covid19api.com/summary", res => {
	let data = ''

	res.on('data', chunk => { 
		data += chunk
	})

	res.on('end', () => {
		fs.writeFile('covid-info.json', data, () => {
			console.log("Save to file: Completed")
		})
	})
})
