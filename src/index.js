import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';

import schema from './options.json';

export default function rawLoader(source) {
  const options = getOptions(this);

  validateOptions(schema, options, {
    name: 'Raw Loader',
    baseDataPath: 'options',
  });

  const shouldConvert = options.raw !== 'undefined' ? !options.raw : true;
  const esModule =
    typeof options.esModule !== 'undefined' ? options.esModule : true;

  let converted = source;

  if (shouldConvert && Buffer.isBuffer(source)) {
    converted = source.toString('utf-8');
  }
  const json = JSON.stringify(converted)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  return `${esModule ? 'export default' : 'module.exports ='} ${json};`;
}

rawLoader.raw = true;
module.exports.raw = true;
