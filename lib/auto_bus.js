var assert = require('assert');

var LocalTransport = require('./local_transport');

var AutoBus = function(transport) {
	this._middleware = [];
	this._transport = transport || new LocalTransport();
}

AutoBus.prototype.use = function(middleware) {
	this._middleware.push(middleware);
};

/**
 * Only one listener allowed
 */
AutoBus.prototype.send = function(channel, message) {
	assert.notStrictEqual(channel, undefined);
	return this._transport.send(channel, message);
};

/**
 * pub/sub (multiple subscribers for one channel)
 */
AutoBus.prototype.publish = function(channel, message) {
	assert.notStrictEqual(channel, undefined);
	return this._transport.publish(channel, message);
};

AutoBus.prototype.join = function(channel, cb) {
	assert.notStrictEqual(channel, undefined);
	return this._transport.join(channel, cb);
}

module.exports = AutoBus;