import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';

import schema from './options.json';

export default function rawLoader(source) {
  const options = getOptions(this) || {};

  validateOptions(schema, options, {
    name: 'Raw Loader',
    baseDataPath: 'options',
  });

  const json = JSON.stringify(source)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  return `export default ${json}`;
}
