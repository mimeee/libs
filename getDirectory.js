const fs = require('fs');
const getFiles = function (src) {
    return new Promise((resolve, reject) => {
        fs.readdir(src, function (err, paths) {
            if (err) {
                reject(err);
            } else {
                resolve(paths);
            }
        })
    })
}
module.exports = getFiles;