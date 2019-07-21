import React,{Component} from 'react'
class Home extends Component{
  constructor(){
    super();//指向Component原型
    // 定义数据  数据都存放在state中
    this.state={
      name:'Linda',
      age:'17',
      obj:{
        userInfo:'itying'
      }
    }
  }
  render (){
    return (
      <div>
        <h2>你好，我是Home组件,我是标题</h2>
        <div>
          <p>名字:{this.state.name}</p> 
          <p>年龄:{this.state.age}</p> 
          <p>userInfo:{this.state.obj.userInfo}</p> 
        </div>
      </div>
    )
  }
}
export default Home