/**
 *  1、if else 不同条件走不同情况
 *  2、switch case 可以替代
 *  3、还可以用对象不同的键来替代
 *  4、
 */ 

// 1、if else
if(status == 1){
    sendLog('processing')
    jumpTo('IndexPage')
}else if(status == 2){
    sendLog('fail')
    jumpTo('FailPage')
}


// 2 switch case
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


// 3 对象形式
const actions = {
  '1': ['processing','IndexPage'],
  '2': ['fail','FailPage'],
  '3': ['fail','FailPage'],
  '4': ['success','SuccessPage'],
  '5': ['cancel','CancelPage'],
  'default': ['other','Index'],
}

let action = actions[status] || actions['default'],
    logName = action[0],
    pageName = action[1];
    sendLog(logName);
    jumpTo(pageName);

// 4、map形式
// Map对象和Object对象有什么区别呢？
// A -- 一个对象的键只能是字符串或者Symbols，但一个Map的键可以是任意值。
// B -- 你可以通过size属性很容易地得到一个Map的键值对个数，而对象的键值对个数只能手动确认。

const actions = new Map([
  [1, ['processing','IndexPage']],
  [2, ['fail','FailPage']],
  [3, ['fail','FailPage']],
  [4, ['success','SuccessPage']],
  [5, ['cancel','CancelPage']],
  ['default', ['other','Index']]
])

let action = actions.get(status) || actions.get('default')
  sendLog(action[0])
  jumpTo(action[1])



// 那么如果是 两个条件呢？？
const actions = new Map([
  ['guest_1', ()=>{/*do sth*/}],
  ['guest_2', ()=>{/*do sth*/}],
  ['guest_3', ()=>{/*do sth*/}],
  ['guest_4', ()=>{/*do sth*/}],
  ['guest_5', ()=>{/*do sth*/}],
  ['master_1', ()=>{/*do sth*/}],
  ['master_2', ()=>{/*do sth*/}],
  ['master_3', ()=>{/*do sth*/}],
  ['master_4', ()=>{/*do sth*/}],
  ['master_5', ()=>{/*do sth*/}],
  ['default', ()=>{/*do sth*/}],
])

/**
 * 按钮点击事件
 * @param {string} identity 身份标识：guest客态 master主态
 * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 开团成功 4 商品售罄 5 有库存未开团
 */
const onButtonClick = (identity, status)=>{
  let action = actions.get(`${identity}_${status}`) || actions.get('default')
  action.call(this)
}


// map的键值可以为任意值
const actions = new Map([
  [{identity:'guest',status:1},()=>{/*do sth*/}],
  [{identity:'guest',status:2},()=>{/*do sth*/}],
  //...
])

const onButtonClick = (identity,status)=>{
  let action = [...actions].filter(([key,value])=>(key.identity == identity && key.status == status))
  action.forEach(([key,value]) => value.call(this))
}



// 假如guest情况下，status1-4的处理逻辑都一样怎么办，最差的情况是这样：
const actions = ()=>{
  const functionA = ()=>{/*do sth*/}
  const functionB = ()=>{/*do sth*/}
  return new Map([
    [{identity:'guest',status:1},functionA],
    [{identity:'guest',status:2},functionA],
    [{identity:'guest',status:3},functionA],
    [{identity:'guest',status:4},functionA],
    [{identity:'guest',status:5},functionB],
    //...
  ])
}

const onButtonClick = (identity,status)=>{
  let action = [...actions()].filter(([key,value])=>(key.identity == identity && key.status == status))
  action.forEach(([key,value])=>value.call(this))
}

// 高级一点的做法 
// 键是正则
const actions = ()=>{
  const functionA = ()=>{/*do sth*/}
  const functionB = ()=>{/*do sth*/}
  const functionC = ()=>{/*send log*/}
  return new Map([
    [/^guest_[1-4]$/,functionA],
    [/^guest_5$/,functionB],
    [/^guest_.*$/,functionC],
    //...
  ])
}

const onButtonClick = (identity,status)=>{
  let action = [...actions()].filter(([key,value])=>(key.test(`${identity}_${status}`)))
  action.forEach(([key,value])=>value.call(this))
}