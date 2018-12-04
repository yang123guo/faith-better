
// 获取深层次的值 TODO:  遇到不存在的 undefined 而不报错
var deepAttr = { a: { b: { c: 15 } } };
var pluckDeep = path => obj => path.split(".").reduce((val, attr) => val[attr], obj); 

pluckDeep("a.b.c")(deepAttr);