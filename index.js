"use strict";

const addCookie = require('./addCookie');
const delSquareBrackets = require('./delSquareBrackets');
const getCookie = require('./getCookie');
const parseUrl = require('./parseUrl');
const isType = require('./isType');
const preloadImgs = require('./preloadImgs');
const regExpPattern = require('./regExpPattern');
const removeCookie = require('./removeCookie');
const sign = require('./sign');
const trim = require('./trim');
const trimAll = require('./trimAll');

const _utils = {
    addCookie,
    delSquareBrackets,
    getCookie,
    parseUrl,
    isType,
    preloadImgs,
    regExpPattern,
    removeCookie,
    sign,
    trim,
    trimAll
};

try {
    window._ = _utils;
}catch(err) {
}
module.exports = _utils;