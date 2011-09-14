/*
	Javascript URL Tools
	Author: Matt Bower <matt@webbower.com>
	Date: August 2011
*/
; (function(win, doc, undefined) {
	if(!window.Earl) Earl = {};
	
	/////// Establish tools
	// Parse URL
	Earl.parse = function(url, filter) {
		// var
		// 	
		// ;
		filter = filter || null;
		
		// Parse URL
		// Markers:
			// '//' Ends protocol. Return <protocol>:
			// '@'  Indicates a username
			// ':'  First one indicates password if username was previous
			// ':'  Second one indicates a port if host was previous
			// '/'  Indicates beginning of path
			// '?'  Indicates beginning of query string
			// '#'  Indicates beginning of hash
		
		return {
			protocol: '',
			username: '',
			password: '',
			host: '',
			port: '',
			pathname: '',
			search: '',
			hash: '',
			get: ''
		};
	};
	
	// Glue URL back together
	Earl.join = function(parts) {
		var
			joinOrder = 'protocol username password host port pathname search hash'.split(' ');
		;
		
		return '';
	};
	
	// Parse query params into GET array
	Earl.parseGet = function(query) {
		if(!query) return {};
		
		// TODO Figure out what this method should accept as its arg. Either whole URL or just the query string.
		// Planning to use this method to parse the query string in Earl.parse() so probably just accept the query string.
		
		// TODO since we're only expecting the query string, we don't need to account for the hash
		var
			_params = {},
			qStart = query.indexOf('?'),
			hStart = query.indexOf('#'),
			q = query.substr(qStart + 1),
			tmp,
			parts,
			i
		;

		if(hStart === -1) hStart = query.length;
		// q = qStart < hStart ? query.substring(qStart + 1, hStart) : query.substring(hStart, qStart);
		
		if(q) {
			tmp = q.split('&');
			i = tmp.length;
			while(i--) {
				parts = tmp[i].split('=');
				// _params[parts[0]] = decodeURIComponent(parts[1]).replace(/\+/g,' ');
				_params[parts[0]] = parts[1];
			}
		}

		return _params;
	};
	
	// Assign GET keys to location by parsing the current URL with the main function
	
	// Bindings to other JS libraries (jQeury, Dojo, YUI, etc)
	
})(this, this.document);
// ; (function($) {
// 	var
// 		_parseParams = function(url) {
// 			if(!url) return {};
// 			
// 			var
// 				_params = {},
// 				qStart = url.indexOf('?'),
// 				hStart = url.indexOf('#'),
// 				q = url.substr(qStart + 1),
// 				tmp,
// 				parts,
// 				i
// 			;
// 
// 			if(hStart === -1) hStart = url.length;
// 			// q = qStart < hStart ? url.substring(qStart + 1, hStart) : url.substring(hStart, qStart);
// 			
// 			if(q) {
// 				tmp = q.split('&');
// 				i = tmp.length;
// 				while(i--) {
// 					parts = tmp[i].split('=');
// 					// _params[parts[0]] = decodeURIComponent(parts[1]).replace(/\+/g,' ');
// 					_params[parts[0]] = parts[1];
// 				}
// 			}
// 	
// 			return _params;
// 		}
// 	;
// 	
// 	$.getParam = function(key) {
// 		if(!key || $.type(key) !== 'string') return $._GET;
// 		
// 		return $._GET[key] ? $._GET[key] : null;
// 	};
// 
// 	$.parseParams = function(url) {
// 		return _parseParams(url);
// 	};
// 
// 	$.GET = $._GET = $.parseParams(location.href);
// })(jQuery);
