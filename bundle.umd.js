(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, function () { 'use strict';

	// This function gets included
	function cube ( x ) {
		// rewrite this as `square( x ) * x`
		// and see what happens!
		return x * x * x;
	}

	console.log( cube( 5 ) ); // 125

}));