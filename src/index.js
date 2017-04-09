/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
export default function (content) {
  this.cacheable && this.cacheable(); // eslint-disable-line no-unused-expressions
  this.value = content;
  return `module.exports = ${JSON.stringify(content)}`;
}
