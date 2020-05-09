const addCookie = function (key, value, expireMilliseconds) {
    var date, str;
    str = key + '=' + value;
    date = new Date();
    date.setTime(date.getTime() + expireMilliseconds);
    return document.cookie = str + ';Domain=' + location.host + ';expires=' + date.toUTCString() + ";Path=/";
}
module.exports = addCookie;