const choosealicenseList = require('.')
const assert = require('assert')
const licenses = require('./licenses.json')

assert.equal(choosealicenseList.find('mit').id, 'MIT')
assert.equal(choosealicenseList.MIT.body.length > 0, true)
assert.equal(Object.prototype.hasOwnProperty.call(choosealicenseList, 'data'), true)
assert.equal(choosealicenseList.MIT.permissions.length, 4)
assert.equal(choosealicenseList.find('data'), false)
assert.notStrictEqual(choosealicenseList.license, choosealicenseList)
assert.strictEqual(choosealicenseList.list, licenses)

console.log('Done!')
