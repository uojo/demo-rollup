(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, function () { 'use strict';

	console.log('main starting');
	var a = require('./a.js');
	var b = require('./b.js'); 
	console.log('in main, a.done=%j, b.done=%j', a.done, b.done);

}));