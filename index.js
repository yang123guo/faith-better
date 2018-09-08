// 开关+延时器用的巧妙
let i = 0;
let timer = setInterval(() => {
    if(i == 1){
        window.location.href = "login.html?href=" + location.href;
        clearInterval(timer);
    };    
    i++;
}, 800);

// 还有字符串替换的实现方式 
// 把要替换用{}包裹，最后用replace方法替换  其中{xx} 可以用 正则来代替
api = 'api/NewsLibrary/GetPagingNewsLibrary?title&pageIndex={pageIndex}';
api.replace('{pageIndex}', 1)


// 数组变成字符串的方法
var markup = [
    '<div id="confirmOverlay">',
    '<div id="confirmBox">',
    '<h1>',params.title,'</h1>',
    '<p>',params.message,'</p>',
    '<div id="confirmButtons">',
    buttonHTML,
    '</div></div></div>'
].join('');


// if 有定时器，那么先清除
_this.timer && clearInterval(_this.timer);

