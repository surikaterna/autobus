var _ = require('lodash');
var assert = require('assert');

var LocalTransport = function (bus) {
	this._bus = bus;
	this._channelListeners = {};
}

LocalTransport.prototype.send = function(channel, message) {
	var listeners = this._channelListeners[channel];
	assert.strictEqual(listeners.length, 1);
	_(listeners).forEach(function(listener) {
		process.nextTick(function() {
			listener(message);
		});
	});
};

LocalTransport.prototype.publish = function(channel, message) {
	var listeners = this._channelListeners[channel];
	_(listeners).forEach(function(listener) {
		process.nextTick(function() {
			listener(message);
		});
	});
};


LocalTransport.prototype.join = function(channel, cb) {
	if(channel.indexOf('*')>0) {
		throw 'Wildcard channel not allowed';
	} else {
		var listeners = this._channelListeners[channel];
		if(listeners === undefined) {
			listeners = [];
			this._channelListeners[channel] = listeners;
		}
		listeners.push(cb);
	}
}

module.exports = LocalTransport;