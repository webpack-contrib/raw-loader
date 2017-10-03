/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
export default function (content) {
  this.value = content;
  const sanitizeUnicode = JSON.stringify(content)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
  return `export default ${sanitizeUnicode}`;
}
