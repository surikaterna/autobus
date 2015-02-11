var assert = require('assert');

var AutoBus = function() {
	this._middleware = [];
}

AutoBus.prototype.use = function(middleware) {
	this._middleware.push(middleware);
};

AutoBus.prototype.send = function(channel, data) {
	assert.strictEqual(channel, undefined);
};

AutoBus.prototype.publish = function(queue, data) {
	assert.strictEqual(channel, undefined);
};

AutoBus.prototype.listen = function(channel, cb) {
	assert.notStrictEqual(channel, undefined);
}

module.exports = AutoBus;