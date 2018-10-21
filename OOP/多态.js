/**
 *
 * 多种调用方式 -- 多态
 * 根据参数数量的不同 运行不同的程序
 */
function add() {
    //获取参数
    var arg = arguments,
        len = arg.length;
    switch (len) {
        //如果没有参数
        case 0:
            return 10;
        case 1:
            return 10 + arg[0];
        case 2:
            return arg[0]+arg[1];
    }
}