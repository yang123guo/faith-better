
// 尽量不用 传过去全部
<Component {...props} />

// 上述计算太浪费了 
// 用啥传啥
<Component name={props.name} />