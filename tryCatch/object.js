// 如果有elform就取得disabled  
(this.elForm || {}).disabled;
// 下面的写法不如上面高级
this.elForm ? this.elForm.disabled : {};