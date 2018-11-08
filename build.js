const fs = require('fs')
const yaml = require('js-yaml')

console.time('build')
const licenseFiles = fs.readdirSync('./choosealicense/_licenses/')
const dataFiles = fs.readdirSync('./choosealicense/_data/')

var licenses = {}
for (var file of licenseFiles) {
	console.log('File:', file)
	var text = fs.readFileSync(`choosealicense/_licenses/${file}`).toString()
	var match = text.match(/---[\n]*(.*)[\n]*[\n]---[\n][\n]*(.*)[\n]*[\n]*/s)
	var data = yaml.safeLoad(match[1])
	var id = data['spdx-id']
	var license = match[2]
	licenses[id] = {
		title: data.title,
		id: id,
		description: '',
		using: [],
		permissions: [],
		conditions: [],
		limitations: [],
		featured: false,
		hidden: true,
		nickname: null,
		note: '',
		redirect_from: '',
		urls: {
			github: `https://api.github.com/licenses/${id}`,
			choosealicense: `https://choosealicense.com/licenses/${id}`,
			opensource: `https://www.opensource.org/licenses/${id}`
		},
		...data,
		using: data.using == null ? [] : data.using,
		body: license
	}
}
fs.writeFileSync('licenses.json', JSON.stringify(licenses, null, '\t'))

var data = {}
for (var file of dataFiles) {
	console.log('File:', file)
	var text = fs.readFileSync(`choosealicense/_data/${file}`).toString()
	data[file.match(/(\w*).yml/)[1]] = yaml.safeLoad(text)
}
fs.writeFileSync('data.json', JSON.stringify(data, null, '\t'))

console.timeEnd('build')
