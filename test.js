const choosealicenseList = require('.')
const assert = require('assert')
const licenses = require('./licenses.json')

assert.equal(choosealicenseList.find('mit').id, 'MIT')
assert.equal(choosealicenseList.MIT.body.length > 0, true)
assert.equal(choosealicenseList.hasOwnProperty('data'), true)
assert.equal(choosealicenseList.MIT.permissions.length == 4, true)
assert.equal(choosealicenseList.find('data'), false)
assert.notStrictEqual(choosealicenseList.license, choosealicenseList)
assert.strictEqual(choosealicenseList.list, licenses)

console.log('Done!')
