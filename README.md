# ChooseALicense List [![Build Status](https://travis-ci.org/TiagoDanin/ChooseALicense-List.png?branch=master)](https://travis-ci.org/TiagoDanin/ChooseALicense-List)

List of licenses from [choosealicense.com](https://choosealicense.com)

## Installation

This is a [Node.js](https://nodejs.org/) module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
npm install choosealicense-list --save
```

## How to Use

```javascript
const choosealicenseList = require('choosealicense-list')

//choosealicenseList['spdx-id'] or choosealicense.find('spdx-id')
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

## Dev Dependencies

- [js-yaml](https://ghub.io/js-yaml): YAML 1.2 parser and serializer

## Contributing

If you have suggestions for how Add-License-Bot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## More Information

- Inspiration in [spdx-license-list](https://www.npmjs.com/package/spdx-license-list).
- Folder **choosealicense** is a submodule of [github/choosealicense.com](https://github.com/github/choosealicense.com).

## License

The content of this project itself is licensed under the [Creative Commons Attribution 3.0 Unported license](https://creativecommons.org/licenses/by/3.0/), and the underlying source code used to format and display that content is licensed under the [MIT license](LICENSE).
