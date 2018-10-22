// 创建弹层的三种方式：

// 1.普通组件通过state和样式控制，在当前组件中显示弹层-每次引入组件并且render里面控制显示，挂载节点在某组件里面
// 弹层 
const Dialog = () => <div>弹层</div>
// 某组件
render() {
    return (
        this.state.showDialog && <Dialog />
    )
}

// 2.通过Portals创建通道，在根节点外部挂载组件-但还是需要每次引入并且在render里面调用
// 弹层 
class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children || <div>xxxx</div>,
      this.el,
    );
  }
}
// 某组件
render() {
    return (
        this.state.showDialog && <Dialog />
    )
}

//3.推荐使用ReactDom.render创建弹层-挂载根节点外层，使用也更方便
let dialog;
class Dialog {
    show(children) {    // 显示
        this.div = document.createElement('div');
        document.body.appendChild(this.div);

        ReactDom.render(children || <div>xxxx</div>, this.div);
    }
    destroy() {     // 销毁
        ReactDom.unmountComponentAtNode(this.div);
        this.div.parentNode.removeChild(this.div);
    }
}
export default {
    show: function(children) {
        dialog = new Dialog();
        dialog.show(children);
    },
    hide: xxxxx
};
// 某组件
import Dialog from 'xxx';
alert = () => {
    Dialog.show(xxxx);
}
render() {
    return (
        <button onClick={this.alert}>点击弹层</button>
    )
}