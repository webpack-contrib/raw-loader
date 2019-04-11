<div align="center">
  <img width="200" height="200" src="/assets/angular.svg">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![tests][tests]][tests-url]

# angular-docgen-loader

A loader that works in conjunction with [Angular Docgen](https://github.com/thatguynamedandy/angular-docgen) to load component definitions as a JSON object.

This repo is a direct fork of the [webpack raw loader](https://github.com/webpack/raw-loader). Any setup relating to raw loader should also work for this loader.

## Getting Started

```console
$ npm install angular-docgen angular-docgen-loader --save-dev
```

Then add the loader to your `webpack` config. For example:

**file.js**

```js
import ComponentDoc from '!angular-docgen-loader!./component.ts';
```

**webpack.config.js**

```js
// webpack.config.js
module.exports = {
  rules: [
    {
      test: /!angular-docgen-loader!/,
      use: "angular-docgen-loader"
    }
  ]
};
```

## Examples


## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

#### [MIT](./LICENSE)

