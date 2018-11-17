
// 轮播中一个比较好的上下算法
export function playNext(type = 'next') {
    let index = getCurrentIndex();
    const length = [].length;
    let newIndex = null;

    if(type === 'next') {
        index ++;
        newIndex = index % length;  // 这里是精髓
    }else {
        index --;
        newIndex = (index + length) % length;  // 这里是精髓
    }
    doNext(newIndex)
}