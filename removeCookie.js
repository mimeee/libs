const addCookie = require('./addCookie');
const getCookie = require('./getCookie');

const removeCookie = function (key) {
    var value;
    if (key) {
        value = getCookie(key);
        if (value) {
            addCookie(key, value, -1);
            return true;
        }
    }
    return false;
}
module.exports = removeCookie;