const isType = require('./isType');

const preloadImgs = function (imgs) {
    if (imgs && isType(imgs, "Array")) {
        imgs.forEach(function (img) {
            var imgDom = new Image();
            imgDom.src = img;
        });
    }
}

module.exports = preloadImgs;