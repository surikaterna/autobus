var should = require('should');
var Matcher = require('../lib/local/matcher');



describe('Matcher', function() {
	describe('#add', function() {
		it('add should add one rule', function() {		
			var matcher= new Matcher();
			matcher.add('a*', true);
			matcher._matchers.length.should.equal(1);
		});
		it('add without userdata should be set to true', function() {		
			var matcher= new Matcher();
			matcher.add('a*');
			matcher._matchers[0].data.should.equal(true);
		});
		it('add with userdata should be properly set', function() {		
			var matcher= new Matcher();
			matcher.add('a*', {a:1});
			matcher._matchers[0].data.a.should.equal(1);
		});
	});
	describe('#match', function() {
		it('match with wildcard', function() {		
			var matcher= new Matcher();
			matcher.add('a*');
			matcher.match('abba').length.should.equal(1);
		});
		it('match with dobule wildcard', function() {		
			var matcher= new Matcher();
			matcher.add('a**b*a');
			matcher.match('abba').length.should.equal(1);
		});		
		it('match with ?', function() {		
			var matcher= new Matcher();
			matcher.add('a??a');
			matcher.match('abba').length.should.equal(1);
		});		
		it('failing match with wildcard', function() {		
			var matcher= new Matcher();
			matcher.add('a*');
			matcher.match('babba').length.should.equal(0);
		});
	});
});