;(function($) {
	// var
	// 	qs = 'bar=sneh&baz=blarg',
	// 	newUrl
	// ;
	// 
	// if(location.search.length === 1) {
	// 	newUrl = location.href + location.search + 
	// } else if(location.search.length > 1) {
	// 	
	// } else {
	// 	
	// }
	
	// Need a URL with query params to test functionality
	// TODO Add awareness of any QUNit query params
	if(location.search.length < 2) location.search = '?bar=sneh&baz=blarg';
	
	module('Earl JS - URL Tools');

	test("Components exist", function() {
		expect(4);
	
		ok(window.Earl, "Root object exists");
		
		ok(typeof Earl.parse === 'function', 'parse() exists');
		ok(typeof Earl.join === 'function', 'join() exists');
		ok(typeof Earl.parseGet  === 'function', 'parseGet() exists');
	});

	test(".parse() Behavior", function() {
		// expect(1);
		
		ok($.isPlainObject(Earl.parse()), "always returns an object");
		
		// var testUrl = 'http://www.foo.com/path/to/directory/page.html?bar=sneh&baz=blarg#hashtastic';
		var testUrl = 'http://www.foo.com/path/to/directory/page.html?bar=sneh&baz=blarg';
		// equal($.parseParams(testUrl)['bar'], 'sneh', "Key accessible in returned object");
	});

	test(".join() Behavior", function() {
		// expect();

		ok(typeof Earl.join() === 'string');
		
		// ok($.isPlainObject($.getParam()), "Return whole collection (object): no arg");
		// ok($.isPlainObject($.getParam(3)), "Return whole collection (object): int arg");
		// ok($.isPlainObject($.getParam([])), "Return whole collection (object): array arg");
		// ok($.isPlainObject($.getParam({})), "Return whole collection (object): obj arg");
		// ok($.isPlainObject($.getParam(function() {})), "Return whole collection (object): func arg");

		// equal($.getParam('bar'), 'sneh', "Pulls key from page URL");
	});
	
	test(".parseGet() Behavior", function() {
		// expect();

		ok($.isPlainObject(Earl.parse()), "always returns an object");
		
		// equal($.GET['bar'], 'sneh', "Pulls key from page URL");
		// equal($.GET['arg'], null, "null if key doesn't exist");
	});
	
})(jQuery);
