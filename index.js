/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function(rawContent) {
  this.cacheable && this.cacheable();
  this.value = rawContent;

  var stringified = JSON.stringify(rawContent)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  return "module.exports = " + stringified;
}
