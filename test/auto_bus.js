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
		it('receive message', function(done) {
			var bus = new AutoBus();
			bus.join('test', function(m) {
				done();
			});
			bus.publish('test', {x:1});
		});

	});

});