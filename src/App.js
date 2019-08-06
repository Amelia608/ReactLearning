import React from 'react';
// import logo from './assets/images/logo.svg';
// import './assets/css/App.css';
// import Home from './components/Home'
// import News from './components/News'
// import Column from './components/Column'
// import Event from './components/Event'
// import List from './components/List'
// import ReactForm from './components/ReactForm'
// import TodoList from './components/TodoList'
// 缓存数据
import Todolist2 from './components/Todolist2'
//模块化
import Todolist3 from './components/Todolist3'
import Axios from './components/Axios'
import FetchJsonp from './components/FetchJonp'
/**
 * 1.父——>子组件传值
 *    方法：父组件调用子组件的时候加上属性  子组件使用父组件传过来的值通过 this.props.属性名获取值 
 * 2.父-->子组件传方法  同属性
 * 3.将整个父对象传给子组件 同属性  值等于this
 * 4.子组件--->父组件传值  子组件调用父组件的方法通过.bind(this,value)传递给父组件
 * 5.父组件主动获取或调用子组件的值或方法  父组件调用子组件  子组件加上ref属性  this.refs.ref属性名即可
 * 
 * 组件.defaultpProps={title:'首页'}  父子组件传值中，如果父组件不给子组件传值，可以在子组件中使用defaultProps定义默认值
 * 
 * 第一步骤：引入 PropTypes  import PropTypes from 'prop-types'
 * 组件.propTypes={num:PropTypes.number} 用以验证父子组传值的类型合法性
 * 注意大小写问题
 * 
 * **/



/**生命周期函数
 * 组件加载时触发的函数(4个步骤)
 *    1.constructor
 *    2.componentWillMount
 *    3.render
 *    4.componentDidMount
 * 组件更新数据触发的生命周期函数（4个步骤）
 *    1.shouldComponentUpdate
 *    2.componentWillUpdate
 *    3.render
 *    4.componentDidUpdate
 * 
 * 
 * 
 * **/  
import Personal from './components/Personal'
function App() {
  return (
    <div className="App">
      {/* <Todolist3/> */}
      {/* <Personal/> */}
      <Axios/>
      <FetchJsonp/>
     
    </div>
  );
}

export default App;
