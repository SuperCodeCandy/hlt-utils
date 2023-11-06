(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.sleep = factory());
})(this, (function () { 'use strict';

	/**
	 * @description 睡眠函数
	 * @param timer 需要睡眠多久 默认1000ms
	 * @returns Promise<number>
	 */
	const sleep = (timer = 1000) => new Promise((resolve) => {
	    setTimeout(() => {
	        resolve(timer);
	    }, timer);
	});

	return sleep;

}));
