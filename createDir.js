const fs = require('fs');
const createDir = function (path) {
    return new Promise( (resolve, reject) => {
        fs.mkdir( path, function(err){
            if (err) {
                reject(err);
            }else {
                resolve(true);
            }
        });
    });
}
module.exports = createDir;