/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function() {
	this.cacheable && this.cacheable();
	var args = Array.prototype.slice.call(arguments);
	args = args.join("");
	this.values = [args];
	return "module.exports = " + JSON.stringify(args);
}
