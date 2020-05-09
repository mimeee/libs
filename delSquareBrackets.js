const isType = require('./isType');

const delSquareBrackets = function (str, ignoreFilterTagName) {
    var i;
    if (ignoreFilterTagName && isType(ignoreFilterTagName, 'Array')) {
        i = '\[^' + ignoreFilterTagName.join('|') + '\]';
    } else {
        i = '\.'
    }
    let p = new RegExp('<(' + i + '*?)(\\s[^>]+)?>(\.*?)<\\\/\\1>');
    while (p.test(str)) {
        str = d(str);
    }

    function d(str) {
        return str.replace(p, ($1, $2, $3, $4) => $4)
    }
    return str;
}

module.exports = delSquareBrackets;