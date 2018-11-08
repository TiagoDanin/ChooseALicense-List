const choosealicenseList = require('.')
const assert = require('assert')


assert.equal(choosealicenseList.find('mit').id, 'MIT')
assert.equal(choosealicenseList.MIT.body.length > 0, true)
assert.equal(choosealicenseList.hasOwnProperty('data'), true)
assert.equal(choosealicenseList.MIT.permissions.length == 4, true)

console.log('Done!')
