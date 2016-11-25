[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![coverage][cover]][cover-url]
[![chat][chat]][chat-url]

<div align="center">
  <img width="200" height="200"
    src="https://cdn3.iconfinder.com/data/icons/lexter-flat-colorfull-file-formats/56/raw-256.png">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>RAW Loader</h1>
</div>

<h2 align="center">Install</h2>

```bash
npm install --save-dev raw-loader
```

<h2 align="center">Usage</h2>

**require**
```js
const txt = require("raw!./file.txt")
```

**webpack.config.js**
```js
const txt = require('file.txt')
```

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: [ 'raw-loader' ]
      }
    ]
  }
}
```

<h2 align="center">Maintainer</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150 height="150" src="https://github.com/sokra.png?s=150">
        <br>
        <a href="https://github.com/sokra">Tobias Koppers</a>
      </td>
    <tr>
  <tbody>
</table>

[npm]: https://img.shields.io/npm/v/raw-loader.svg
[npm-url]: https://npmjs.com/package/raw-loader

[node]: https://img.shields.io/node/v/raw-loader.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/webpack/raw-loader.svg
[deps-url]: https://david-dm.org/webpack/raw-loader

[tests]: http://img.shields.io/travis/webpack/raw-loader.svg
[tests-url]: https://travis-ci.org/webpack/raw-loader

[cover]: https://coveralls.io/repos/github/webpack/raw-loader/badge.svg
[cover-url]: https://coveralls.io/github/webpack/raw-loader

[chat]: https://badges.gitter.im/webpack/webpack.svg
[chat-url]: https://gitter.im/webpack/webpack
