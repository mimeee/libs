const calcRem = function () {
    // html初始fontSize = 320 / 7.2 = 44.44
    // 根据屏幕宽度修改font-size基准
    function calcFontSize() {
        var html = document.documentElement,
            windowWidth = html.clientWidth,
            width = 720,
            unit = width / 100;
        if (windowWidth > width) {
            windowWidth = width;
        }
        html.style.fontSize = windowWidth / parseFloat(unit.toFixed(2)) + 'px';
    }
    calcFontSize();
    window.onresize = calcFontSize;
    document.addEventListener('DOMContentLoaded', calcFontSize, false);
}
module.exports = calcRem;