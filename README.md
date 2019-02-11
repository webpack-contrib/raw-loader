<div align="center">
  <img width="200" height="200"
    src="https://cdn3.iconfinder.com/data/icons/lexter-flat-colorfull-file-formats/56/raw-256.png">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

# raw-loader

A loader for webpack that allows importing files as a String.

## Requirements

This module requires a minimum of Node v6.9.0 and Webpack v4.0.0.

## Getting Started

To begin, you'll need to install `raw-loader`:

```console
$ npm install raw-loader --save-dev
```

Then add the loader to your `webpack` config. For example:

**webpack.config.js**

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  }
}
```

Or from the command-line:

```console
$ webpack --module-bind 'txt=raw-loader'
```

And run `webpack` via your preferred method.

## Usage

Since you have configured `.txt` file in `webpack.config.js` , you can import `.txt` files directly.

```js
import txt from './file.txt';
```

`raw-loader` can also import `.css` and `.html` files as String, when importing, you should use file path starting with `raw-loader!`.

```js
import style from 'raw-loader!./style.css';

import header from 'raw-loader!./header.html';
```


## License

#### [MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/raw-loader.svg
[npm-url]: https://npmjs.com/package/raw-loader
[node]: https://img.shields.io/node/v/raw-loader.svg
[node-url]: https://nodejs.org
[deps]: https://david-dm.org/webpack-contrib/raw-loader.svg
[deps-url]: https://david-dm.org/webpack-contrib/raw-loader
[tests]: 	https://img.shields.io/circleci/project/github/webpack-contrib/raw-loader.svg
[tests-url]: https://circleci.com/gh/webpack-contrib/raw-loader
[cover]: https://codecov.io/gh/webpack-contrib/raw-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/raw-loader
[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack
[size]: https://packagephobia.now.sh/badge?p=raw-loader
[size-url]: https://packagephobia.now.sh/result?p=raw-loader
