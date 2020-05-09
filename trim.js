const trim = function (str) {
    var result = str;
    if (str) {
        result = ('' + str).replace(/(^\s*)|(\s*$)/g, '');
    }
    return result;
}
module.exports = trim;