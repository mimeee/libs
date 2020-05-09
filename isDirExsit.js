const fs = require('fs');
const isDirExsit = function (src) {
    return new Promise((resolve, reject) => {
        fs.exists(src, function (exists) {
            // 已存在
            if (exists) {
                resolve(true);
            }
            // 不存在
            else {
                resolve(false);
            }
        });
    })
}
module.exports = isDirExsit;