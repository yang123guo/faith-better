// 定时器中必定存在清除定时器方法


// 1. 定时器内部清除： 定时器和递归调用一样，都必须有一个执行出口
var a_interval = setInterval(function(){
    document.documentElement.scrollTop += 20;  // 不断执行函数

    if(document.documentElement.scrollTop >= 865){   // if设定出口，在里面清除定时器
        clearInterval(a_interval);
    }
},10);

// 2. 定时器外部（头部）清除定时器
clearTimeout(animateHandle);
animateHandle = setTimeout(function(){  //  定义延时器
    if(st<=100){
        animateHandle = $btBox.animate({  // 延时器内容调用自己
            bottom:-420
        });
    }else{
        animateHandle = $btBox.animate({
            bottom:-150
        });
    }
},200);       