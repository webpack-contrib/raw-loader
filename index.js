/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(content, sourcemaps) {
	this.cacheable && this.cacheable();
	this.value = content;
	var newContent = "module.exports = " + JSON.stringify(content);

	this.callback && this.callback(null, newContent, sourcemaps);
	return newContent;
}
