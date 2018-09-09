


// switch 的使用,多个条件用一个结果，用下面这种或者用true/false的方法
// 注意： case的语句中出现 && || 和计算语句
function test ( num ) {
    switch ( num ){
        case ('1' || '2') :
            alert('1或者2');
            break;

        default :
            alert('不是1或者2');
            break;
    }        
}

function test ( num ){
    switch ( num ) {
        case '1' :
        case '2' :
            alert('1或者2');
            break;
        case '3' :
        case '4' :
        case '5' :
        case '6' :
        case '7' :
            alert('不是1或者2');
            break;
    }
} 

function test ( num ){
    switch(true){
        case num == '1' || num == '2':
             alert('1或者2');
            break;
        case num != '1' && num != '2':
            alert('不是1或者2');
            break;
        default:
            alert('不是1或者2');
    }
}

test('1');
test('4');


   