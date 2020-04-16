var licenses = require('./licenses.json')
var list = Object.assign({}, licenses)
list.license = licenses
list.list = licenses
list.find = (id) => {
	if (typeof id !== 'string') {
		throw new TypeError('Expected a string');
	}
	for (let license in licenses) {
		if (license.toLocaleLowerCase() === id.toLocaleLowerCase()) {
			return licenses[license]
		}
	}
	return false
}
list.data = require('./data.json')
module.exports = list
