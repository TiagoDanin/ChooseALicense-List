const fs = require('fs')
const yaml = require('js-yaml')

console.time('build in')
const licenseFiles = fs.readdirSync('./choosealicense/_licenses/')
const dataFiles = fs.readdirSync('./choosealicense/_data/')

const licenses = {}
for (const file of licenseFiles) {
	console.log('File:', file)
	const text = fs.readFileSync(`choosealicense/_licenses/${file}`).toString()
	const match = text.match(/-{3}\n*(.*)\n+-{3}\n+(.*)\n*/s)
	const data = yaml.safeLoad(match[1])
	const id = data['spdx-id']
	const license = match[2]
	licenses[id] = {
		title: data.title,
		id,
		description: '',
		permissions: [],
		conditions: [],
		limitations: [],
		featured: false,
		hidden: true,
		nickname: null,
		note: '',
		redirect_from: '', // eslint-disable-line camelcase
		urls: {
			github: `https://api.github.com/licenses/${id}`,
			choosealicense: `https://choosealicense.com/licenses/${id}`,
			opensource: `https://www.opensource.org/licenses/${id}`
		},
		...data,
		redirectFrom: data.redirect_from,
		using: data.using === null ? [] : data.using,
		body: license
	}
}

fs.writeFileSync('licenses.json', JSON.stringify(licenses, null, '\t'))

const data = {}
for (const file of dataFiles) {
	console.log('File:', file)
	const text = fs.readFileSync(`choosealicense/_data/${file}`).toString()
	data[file.match(/(\w*).yml/)[1]] = yaml.safeLoad(text)
}

fs.writeFileSync('data.json', JSON.stringify(data, null, '\t'))

console.timeEnd('build in')
