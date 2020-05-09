const parseUrl = function (key) {
    var search;

    if ( location.search ) {
        search = location.search.substr(1);
    } else if ( location.hash.indexOf("?") !== -1) {
        search = location.hash.substr(location.hash.indexOf("?") + 1);
    }

    match = search.match(new RegExp('[?&]?' + key + '=([^=&]+)'));

    return match && match.length > 1 ? match[1] : '';
}

module.exports = parseUrl;