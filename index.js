var list = require('./licenses.json')
list.license = list
list.find = (id) => {
	if (typeof id !== 'string') {
		throw new TypeError('Expected a string');
	}
	for (let license in list) {
		if (license.toLocaleLowerCase() === id.toLocaleLowerCase()) {
			return list[license]
		}
	}
	return false
}
list.data = require('./data.json')
module.exports = list
