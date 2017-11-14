/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function(content) {
  this.cacheable && this.cacheable();
  this.value = content;

  var stringified = JSON.stringify(content)
  .replace(/\u2028/g, '\\u2028')
  .replace(/\u2029/g, '\\u2029');

  return "module.exports = " + stringified;
}
