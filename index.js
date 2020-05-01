const licenses = require('./licenses.json')
const list = {...licenses}

list.licenses = licenses
list.list = licenses

list.find = id => {
	if (typeof id !== 'string') {
		throw new TypeError('Expected a string')
	}

	for (const license in licenses) {
		if (license.toLocaleLowerCase() === id.toLocaleLowerCase()) {
			return licenses[license]
		}
	}

	return false
}

list.data = require('./data.json')

module.exports = list
