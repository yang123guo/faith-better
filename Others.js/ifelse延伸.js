/**
 *  1、if else 不同条件走不同情况
 *  2、switch case 可以替代
 *  3、还可以用对象不同的键来替代
 *  4、
 */ 


if(status == 1){
    sendLog('processing')
    jumpTo('IndexPage')
}else if(status == 2){
    sendLog('fail')
    jumpTo('FailPage')
}

