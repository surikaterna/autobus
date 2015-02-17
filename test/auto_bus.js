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
			});
			bus.join('test', function(m) {
			});
			try
			{
				bus.send('test', {x:1});
				done('should trow on send with multiple subscribers');
			} catch(e) {
				done();
			}
		});
		it('send without listener', function(done) {
			var bus = new AutoBus();
			bus.send('test', {x:1});
			done();			
		});
		it('publish without listener', function(done) {
			var bus = new AutoBus();
			bus.publish('test', {x:1});
			done();			
		});
		it('join with wildcard', function(done) {
			var bus = new AutoBus();
			bus.join('test.*.command', function(m) {
				done();
			});
			bus.publish('test.wildcard.command', {x:1});
		});
	});
	describe('#use', function() {
		it('calls middleware', function(done) {
			var bus = new AutoBus();
			var called = false;
			bus.use(function(message, next) {
				done();
			});

			bus.join('home', function(m) {
				console.log("got" + m);
			});
			bus.publish('home', 'test');
		});
	});

});