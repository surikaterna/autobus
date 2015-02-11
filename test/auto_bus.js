var should = require('should');
var AutoBus = require('..');


describe('AutoBus', function() {
	describe('#listen', function() {
		it('throws if no roomname', function(done) {
			var bus = new AutoBus();
			try {
				bus.listen();
				done(new Error('Should throw'));
			} catch(e){
				done();
			}
		});
	});
});