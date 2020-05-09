const fs = require('fs');

function writeFile(file, data, option) {
    let o = {
        flag: 'w',
        encoding: 'utf-8',
        mode: '0666'
    };
    if (option) {
      o = Object.assign(o, option);  
    }
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, o, function (err) {
            if (err) {
                console.log(err);
                console.log('创建文件失败');
                reject(false);
            } else {
                console.log('创建文件成功');
                resolve(true);
            }
        });
    });
}

module.exports = writeFile;