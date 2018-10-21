
// 1.负责创建DIV的基本功能
var CreateDiv = function(html){
    this.html = html;
    this.init();
}
CreateDiv.prototype.init = function(){
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
}
var SingletonDiv = (function(){
    var instance;
    return function(html){
        if(!instance){
            instance = new CreateDiv(html);
        }
        return instance;
    }
})()
var a = SingletonDiv('yyh');
var b = SingletonDiv('yyh1');


// 2.负责创建DIV的基本功能
class CreateDiv {
    constructor(html) {
        this.html = html;
        this.init();
    }
    init() {
        const div = document.createElement('div');
        div.innerHTML = this.html;
        document.body.appendChild(div);
    }
}
// 负责管理单例
class ProxysingletonCreateDiv {
    constructor(htmlStr) {
        return ProxysingletonCreateDiv.getInstance(htmlStr);
    }
    static getInstance(name) {
        if(!ProxysingletonCreateDiv.instance) {
            ProxysingletonCreateDiv.instance = new CreateDiv(name)
        }
        return ProxysingletonCreateDiv.instance;
    }
}
const singletonC = new ProxysingletonCreateDiv('yyh1');
const singletonD = new ProxysingletonCreateDiv('yyh2');
console.log(singletonC === singletonD);
singletonC.init();
singletonD.init();


// js的衍生 函数版本
var getSingleton = function(fn){
    var result;
    return function(){
        return result || (result = fn.apply(this,arguments));
    }
}

// js自调用 + new 类
var proxySingletonCreateDiv = (function(){
    var instance;
    return function(html){
        if(!instance){
            instance = new createDiv(html);
        }
        return instance;
    }
})();

// 类单例
class ProxysingletonCreateDiv {
    constructor(htmlStr) {
        return ProxysingletonCreateDiv.getInstance(htmlStr);
    }
    static getInstance(name) { 
        // 静态方法就是 function ProxysingletonCreateDiv() {}  
        // 把函数 ProxysingletonCreateDiv 看成对象挂接的方法 ProxysingletonCreateDiv.getInstance = function ..
        if(!ProxysingletonCreateDiv.instance) {
            ProxysingletonCreateDiv.instance = new CreateDiv(name)
        }
        return ProxysingletonCreateDiv.instance;
    }
}