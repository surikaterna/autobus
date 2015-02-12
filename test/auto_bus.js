var should = require('should');
var AutoBus = require('..');


describe('AutoBus', function() {
	describe('#join', function() {
		it('throws if no roomname', function(done) {
			var bus = new AutoBus();
			try {
				bus.join();
				done(new Error('Should throw'));
			} catch(e){
				done();
			}
		});
		it('receive message on pub channel', function(done) {
			var bus = new AutoBus();
			bus.join('test', function(m) {
				done();
			});
			bus.publish('test', {x:1});
		});
		it('send with one subscriber', function(done) {
			var bus = new AutoBus();
			bus.join('test', function(m) {
				done();
			});
			bus.send('test', {x:1});
		});
		it('send fail with two subscribers', function(done) {
			var bus = new AutoBus();
			bus.join('test', function(m) {
				done();
			});
			bus.join('test', function(m) {
				done();
			});
			bus.send('test', {x:1});
		});
	});

});