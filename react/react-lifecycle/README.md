生命周期
1. 组件也有实例化
  Class mount JSX对象
  constructor 本职工作就是state 声明，可以用于数据的准备或请求 传统的面向对象思想
  可以这样用，但是没有必要
2. 围绕mount 挂载 首要任务
  - componentWillMount()


  - 性能优化  (贴合用户体验的需求)
    componentDidMount()
    请求数据 组件的基本UI已渲染(加速加载UI)，MVVM的setState 推迟异步执行的数据，
3. update
    componentWillUpdate
    componentDidUpdate

4. unmount
    卸载组件
5. props
    由于MVVM 数据流的流向，由外到内，来自于props更新，更加频繁。
    React 性能优化的核心，拒绝不必要的更新 nextProps,nextState,this.state,this.props 新旧的比较
    shoouldComponentUpdate(nextProps){
        if(nextprops === this.props){
            return false
        }
        return true;
    }
    componentWillReciveProps(nextProps)
