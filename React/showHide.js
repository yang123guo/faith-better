// 1、模拟vue中的 v-if 
function Render ({ if: cond, children }) {
	return cond ? children : null
}

// 使用
render () {
    const { status }  = this.props
    return (
      <div>
        <Render if={status === 'loading'} >
          加载状态
        </Render>

        <Render if={status === 'error'} >
          错误状态
        </Render>

        <Render if={status === 'success'} >
          成功状态
        </Render>

        <Render if={status === 'empty'} >
          空状态
        </Render>
      </div>
    )
}


// 2、使用高阶组件  
const withList = WrappedComponent => {
    return class PP extends Component {
        render() {
            const { status } = this.props
            switch (status) {
                case 'loading':
                    return <div>加载状态</div>
                
                case 'error':
                    return <div>错误状态</div>
                
                case 'success':
                    return <WrappedComponent {...this.props}/>
                
                case 'empty':
                    return <div>空状态</div>
            }
        }
    }
}

/** 
 * 暂时不会。。。
 * 
 * 复制代码其次我们可以把加载, 错误, 以及空状态统一抽成组件, 
 * 对于提高组件的复用率无疑可以起很大作用.
 * 
 * 如果我们可以保证所有列表的props一致(也就是都使用status判断状态),
 * 我们完全可以专注的写status为success的状态:
 * */ 
@withList
class List extends Component {
  static propTypes = {
    status: PropTypes.oneOf(['loading', 'error', 'success', 'empty'])
  }
  
render () {
    return (
      <div>
        成功页面
      </div>
    )
  }
}

