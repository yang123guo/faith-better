// 前端倒计时纠偏实现
// 首先我们需要模拟主线程阻塞的环境，同时又不能让主线程一直阻塞：

setInterval(function(){ 
    let j = 0
    while(j++ < 100000000) {
        console.log(j)
    }
}, 0)



/** 
 *  ms 从服务器和活动开始时间计算出的时间差，这里测试用 50000 ms
 *  interval 倒计时间隔
 */

const [interval, startTime] = [1000, new Date().getTime()];
let [ms, count, timeCounter] = [5000, 0];
if( ms >= 0) {
    timeCounter = setTimeout(countDownStart, interval)
}

function countDownStart () {
    count++;
    const offset = new Date().getTime() - (startTime + count * interval); // A
    const nextTime = interval - offset;
    if (nextTime < 0) { 
        nextTime = 0 
    }
    ms -= interval;
    // 循环执行的条件是： ms减到0为止
    console.log(`误差：${offset} ms，下一次执行：${nextTime} ms 后，离活动开始还有：${ms} ms`)
    if (ms < 0) {
        clearTimeout(timeCounter);
    } else {
        timeCounter = setTimeout(countDownStart, nextTime);
    }
}