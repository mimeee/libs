const fs = require('fs');
const path = require('path');

const copyFile = function (p, dst) {
    var _dst = dst + '/' + path.basename(p),
        readable, writable;
    fs.stat(p, async function (err, st) {
        if (err) {
            throw err;
        }

        // 判断是否为文件
        if (st.isFile()) {
            // 创建读取流
            readable = fs.createReadStream(p);
            // 创建写入流
            writable = fs.createWriteStream(_dst);
            // 通过管道来传输流
            readable.pipe(writable);
        }
    });
}

module.exports = copyFile;