/**
 * 1、传递props 的几种方式
 */ 
// 以键值对
<Com 
    data={data}
    attr={attr}
/>

// 或者 以对象形式
const params = {
    name: 'yang',
    age: 18
};

<Com 
    {...params}
/>

// 或者混杂的形式
<Com 
    data={data}
    attr={attr}
    {...params}
/>


// setState 对象
const { data } = this.state;
this.setState({ data: {...data, key: 1 } });


// shouldComponentUpdate 用lodash或者自己工具函数判断
shouldComponentUpdate(nextProps, nextState) {
    if (_.isEqual(nextState.columns, this.state.columns)) return false;
    return true;
}