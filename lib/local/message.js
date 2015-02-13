var Message = function() {
	this._isAcknowledged = undefined;
}

Message.prototype.acknowledge = function() {
	this._isAcknowledged = true;
	this._ack(null, true);
}

Message.prototype.reject = function(why) {
	if(this._isAcknowledged !== true) {
		this._isAcknowledged = false;
		this._ack(why, false);
	}
}

module.exports = Message;