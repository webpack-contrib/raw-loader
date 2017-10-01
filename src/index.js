/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
export default function (content) {
  return `export default = ${JSON.stringify(content)}`;
}
