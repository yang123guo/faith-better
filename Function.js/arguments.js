/*
    实参长度  arguments.length   形参长度 arguments.callee.length 
    arguments是个对象，arguments对象的长度是由实参个数而不是形参个数决定的
    但同时arguments[0] arguments[1] 也有数组的属性，但不是真正的数组
    需要用var args = Array.prototype.slice.call(arguments)转化
 */
 
function f(a, b, c){
    alert(arguments.length);   // result: "2"
    a = 100;
    alert(arguments[0]);       // result: "100"
    arguments[0] = "qqyumidi";
    alert(a);                  // result: "qqyumidi"
    alert(c);                  // result: "undefined"
    c = 2012;
    alert(arguments[2]);       // result: "undefined"，
}

f(1, 2);

/** 
 * 1. 可见实参没有c，不管c怎么赋值，arguments[2]都是undefined。
 * 2. 其他参数可以通过内部赋值来更改，两种更改方式: 1. arguments[0] = "qqyumidi"; 2. 或者 a = 100;
 * 3. arguments.callee，说明arguments对象有一个callee属性,代表函数本身（  如要调用还得加上调用标志 ()  ）
 * 4. 其实Javascript并没有重载函数的功能，但是arguments对象能够模拟重载
 * 5. 在函数中arguments可以直接使用
 */ 

