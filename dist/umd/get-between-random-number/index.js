(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["get-between-random-number"] = factory());
})(this, (function () { 'use strict';

	/**
	 * @description 获取两个数之间的随机数
	 * @param minNumber 最小数
	 * @param maxNumber  最大数
	 * @returns  获取到的值
	 */
	const getBetweenRandomNumber = (minNumber, maxNumber) => Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

	return getBetweenRandomNumber;

}));
