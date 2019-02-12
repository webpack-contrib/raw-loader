// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import inline from '!!../../src/index.js!./file.txt';

import txt from './file.txt';
import separator from './separator.txt';

export { txt, separator, inline };
