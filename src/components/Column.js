import React from 'react'
import '../assets/css/index.css'
 class Column extends React.Component{
  constructor(props){
    super(props);
    this.state={
      msg:'我是栏目组件的数据',
      title:'我是标题的title',
      class:'className',
      style:{
        color:'yellow',
        fontSize:'30px'
      }
    }
  }
  // ***属性名  for->htmlFor   class->className
  render(){
    return (
      <div className="column_C">
        <p>我是栏目组件</p>
        <h2 title={this.state.title}>{this.state.msg}</h2>
        <div  className={this.state.class}>我的文本颜色是红色的</div>
        <div>
          <label htmlFor="label">姓名</label>
          <input type="text" id="label"/>
        </div>
        <div style={{'color':'green'}}>我是绿色的文本</div>
        <div style={this.state.style}>我是绿色的文本</div>
      </div>
    )
  }
 }
 export default Column 