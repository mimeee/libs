const trim = require('./trim');

const getCookie = function (key) {
    var array, c, cookies, i, len, value;
    key = trim(key);
    cookies = document.cookie.split(';');
    value = null;
    for (i = 0, len = cookies.length; i < len; i++) {
        c = cookies[i];
        array = c.split('=');
        if (trim(array[0]) === key) {
            value = trim(array[1]);
            break;
        }
    }
    return value;
}
module.exports = getCookie;