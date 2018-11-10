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

switch (status){
    case 1:
      sendLog('processing')
      jumpTo('IndexPage')
      break
    case 2:
    case 3:
      sendLog('fail')
      jumpTo('FailPage')
      break 
    default:
      sendLog('other')
      jumpTo('Index')
      break 
}

const actions = {
  '1': ['processing','IndexPage'],
  '2': ['fail','FailPage'],
  '3': ['fail','FailPage'],
  '4': ['success','SuccessPage'],
  '5': ['cancel','CancelPage'],
  'default': ['other','Index'],
}
