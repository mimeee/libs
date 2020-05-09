const regExpPattern = {
    isEmail(str){
        return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str);
    },
    isPhone(str){
        return /^1(3|4|5|6|7|8|9)\d{9}$/.test(str);
    },
    isQq(str){
        return /^[1-9][0-9]{4,9}$/gim.test(str);
    },
    isDomain(str){
        return /^((http:\/\/)|(https:\/\/))?([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}(\/)/.test(str);
    },
    isIp(str){
        return /((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/.test(str);
    },
    //是否存在中文
    haveChineseChar(str){
        return /^[\u4e00-\u9fa5]{1,}$/.test(str);
    },
    isFloat(str){
        return /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/.test(str);
    }
}
module.exports = regExpPattern;