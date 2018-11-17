// 跳出for循环前执行函数

const excuse = function() {
    console.log('执行');
}

const fn = function() {
    for(let i = 0; i < 10; i++) {
        for(j = 0; j < 10; i++) {
            if(i * j > 30) {
                return excuse(); // 在跳出循环前还能执行excuse函数
            }
        }
    }
}