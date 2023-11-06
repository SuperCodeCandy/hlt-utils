(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["format-string-to-big-hump-string"] = factory());
})(this, (function () { 'use strict';

	/**
	 *@description 将string转为大驼峰的格式 zh-cn -> ZhCn | zh-cn-cn -> ZhCnCN
	 * @param str 需要转换的字符
	 * @param flag 字符标识符 默认值 '-'
	 * @returns 转化后的数据
	 */
	const formatStringToBigHumpString = (str = '', flag = '-') => str
	    .replace(new RegExp(`(^.{1})|(${flag}\\w{1})`, 'gi'), ($1) => $1.toLocaleUpperCase())
	    .replace(new RegExp(`${flag}`, 'g'), '');

	return formatStringToBigHumpString;

}));
