# M项目 javascript 公共库

- ### 通用

  - isType

  ```javascript
    /**
     * 判断变量类型
     * @method isType
     * @param {Any} obj 需要判断的变量
     * @param {String} type 判断的类型
     * @return {Boolean} 返回值说明
     */
    isType("s", "String"); //true
    isType([], "Object");  //false;
    isType([], "Array");   //true
  ```

- ### 字符串

  - trim

  ```javascript
    /**
     * 删除字符串两侧所有的空格
     * @method trim
     * @param {String} str 需要删除空格的字符串
     * @return {String} 删除空格后的字符串
     */
    trim("     s       ");   //"s"
    trim("  s    s       "); //"s    s"
  ```

  - trimAll

  ```javascript
    /**
     * 删除字符串所有的空格
     * @method trimAll
     * @param {String} str 需要删除空格的字符串
     * @return {String} 删除空格后的字符串
     */
    trimAll("     s       ");   //"s"
    trimAll("  s    s       "); //"ss"
  ```

  - delSquareBrackets

  ```javascript
    /**
     * 删除字符串中<>以及<>里面所包含的值
     * @method delSquareBrackets
     * @param {String} str  待处理的字符串
     * @param {Array} ignoreFilterTagName 不删除的tag
     * @return {String} 删除后的字符串
     */
    delSquareBrackets('123<div>45</div><div>67<div>89</div></div>10<b>1112</b>');   //"123456789101112"
    delSquareBrackets('123<div>45</div><div>67<div><span>89</span></div></div>10<b>1112</b>', ['span']); //"1234567<span>89</span>101112"
  ```

  - regExpPattern

  ```javascript
   //常用正则对象
    regExpPattern.isEmail(str)  //是否是邮箱
    regExpPattern.isPhone(str)  //是否是电话号码
    regExpPattern.isQq(str)     //是否是qq
    regExpPattern.isDomain(str) //是否是域名
    regExpPattern.isIp(str)     //是否是ip
    regExpPattern.haveChineseChar(str)  //是否包含中文字符
    regExpPattern.isFloat(str)          //是否是浮点数
  ```

- ### cookie处理

  - removeCookie

  ```javascript
    /**
     * 删除cookie
     * @method removeCookie
     * @param {String} key 需要删除Cookie的key
     * @return {Boolean} 是否删除成功
     */
    removeCookie('test');   //true
  ```

  - addCookie

  ```javascript
    /**
     * 添加cookie
     * @method addCookie
     * @param {String} key
     * @param {String} value
     * @param {String} expireMilliseconds 有效时间
     * @return {String} 添加后的cookie格式
     */
    addCookie("test", "test", 360000);   //"test=test;Domain=lanhuapp.com;expires=Thu, 07 May 2020 07:05:23 GMT;Path=/"
  ```

  - getCookie

  ```javascript
    /**
     * 获取cookie
     * @method getCookie
     * @param {String} key
     * @return {String} key所对应的value
     */
    getCookie("test");   //"test"
  ```


- ### url

  - parseUrl

  ```javascript
    /**
     * 解析url的query
     * @method parseUrl
     * @param {String} key 需要取得的query的键
     * @return {String} key所对应的value
     */
    parseUrl('ie');   //"utf-8"
  ```

- ### 图片

  - preloadImgs

  ```javascript
    /**
     * 预加载图片
     * @method preloadImgs
     * @param {Array} imgs 需要加载的img的src
     * @return {void}
     */
    preloadImgs(['https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1970585368,2576171845&fm=15&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588846464456&di=8591a4e2c9955474c8ccc14a0c8965cd&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F309b84f2e09bd9f87df9b14efbcf21131a5bfcbd.jpg']);
  ```

- ### 文件

  - isDirExsit

  - getDirectory

  - createDir

  - copyFile

  - createFile

  - readFile
