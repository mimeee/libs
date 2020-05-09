const trimAll = function (str) {
    var result = str;
    if (str) {
        result = ('' + str).replace(/\s/g, '');
    }
    return result;
}
module.exports = trimAll;