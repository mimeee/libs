const isType = function (obj, type) {
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
}
module.exports = isType;