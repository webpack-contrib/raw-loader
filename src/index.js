import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';
import parse from 'angular-docgen';

import schema from './options.json';

export default function angularDocgenLoader(source) {
  const options = getOptions(this) || {};

  validateOptions(schema, options, 'Angular Docgen Loader');

  const json = JSON.stringify(parse(source))
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  return `export default ${json}`;
}
