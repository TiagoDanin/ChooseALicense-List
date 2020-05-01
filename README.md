# ChooseALicense List

[![Travis](https://img.shields.io/travis/TiagoDanin/ChooseALicense-List.svg?branch=master&style=flat-square)](https://travis-ci.org/TiagoDanin/ChooseALicense-List) [![XO code style](https://img.shields.io/badge/code%20style-XO-red.svg?style=flat-square)](https://github.com/xojs/xo) [![Node](https://img.shields.io/node/v/choosealicense-list.svg?style=flat-square)](https://npmjs.org/package/choosealicense-list) [![Version](https://img.shields.io/npm/v/choosealicense-list.svg?style=flat-square)](https://npmjs.org/package/choosealicense-list) [![Downloads](https://img.shields.io/npm/dt/choosealicense-list.svg?style=flat-square)](https://npmjs.org/package/choosealicense-list) 

List of licenses from choosealicense.com

## Installation

Module available through the [npm registry](https://www.npmjs.com/). It can be installed using the  [`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) or [`yarn`](https://yarnpkg.com/en/) command line tools.

```sh
# NPM
npm install choosealicense-list --save
# Or Using Yarn
yarn add choosealicense-list
```

## Example

```js
/* eslint-disable no-unused-expressions */
const choosealicenseList = require('choosealicense-list')

// ChoosealicenseList['spdx-id'] or choosealicense.find('spdx-id')
choosealicenseList.MIT
/*
-> {
	title: 'MIT License',
	id: 'MIT',
	description: 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.',
	using: [{
		Babel: 'https://github.com/babel/babel/blob/master/LICENSE'
	}, {
		'.NET Core': 'https://github.com/dotnet/corefx/blob/master/LICENSE.TXT'
	}, {
		Rails: 'https://github.com/rails/rails/blob/master/MIT-LICENSE'
	}],
	permissions: ['commercial-use',
		'modifications',
		'distribution',
		'private-use'
	],
	conditions: ['include-copyright'],
	limitations: ['liability', 'warranty'],
	featured: true,
	hidden: false,
	nickname: null,
	note: '',
	redirect_from: '',
	urls: {
		github: 'https://api.github.com/licenses/MIT',
		choosealicense: 'https://choosealicense.com/licenses/MIT',
		opensource: 'https://www.opensource.org/licenses/MIT'
	},
	'spdx-id': 'MIT',
	how: 'Create a text file (typically named LICENSE or LICENSE.txt) in the root of your source code and copy the text of the license into the file. Replace [year] with the current year and [fullname] with the name (or names) of the copyright holders.',
	body: 'MIT License\n\nCopyright (c) [year] [fullname]\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n'
}
*/

choosealicenseList.data
/*
> [fields, meta, rules]
*/

choosealicenseList.data.rules.permissions[1]
/*
-> {
	description: 'This software may be modified.',
	label: 'Modification',
	tag: 'modifications'
}
*/
```

## Tests

To run the test suite, first install the dependencies, then run `test`:

```sh
# NPM
npm test
# Or Using Yarn
yarn test
```

## Dependencies

None

## Dev Dependencies

- [js-yaml](https://ghub.io/js-yaml): YAML 1.2 parser and serializer
- [xo](https://ghub.io/xo): JavaScript/TypeScript linter with great defaults

## Related

- [spdx-license-list](https://ghub.io/spdx-license-list): List of SPDX licenses

## Contributors

Pull requests and stars are always welcome. For bugs and feature requests, please [create an issue](https://github.com/TiagoDanin/ChooseALicense-List/issues). [List of all contributors](https://github.com/TiagoDanin/ChooseALicense-List/graphs/contributors).

## Thanks

- [sindresorhus](https://www.npmjs.com/package/spdx-license-list): Inspiration in spdx-license-list
- [github](https://github.com/github/choosealicense.com): Folder **choosealicense** is a submodule of github/choosealicense.com

## License

[MIT](LICENSE) © [TiagoDanin](https://TiagoDanin.github.io)