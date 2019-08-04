import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer';
class Personal extends Component{
 constructor(props){
    super(props);
    this.state={
      msg:'我是父组件的msg'
    }
 }
 changeData=()=>{
   this.setState({msg:'父组件msgchange'})
 }
 getChild=(result)=>{
   this.setState({msg:result})
  console.log('res',result)

 }
 readerChild=()=>{
   console.log(this.refs.footer.state.msg)
   this.refs.footer.setState({msg:'父组件主动改变子组件的值'})
 }
 render(){
   return (
     <div className="page_personal">
       <h1>{this.state.msg}</h1>
       <hr className="mt20"/>
       这是个人中心页面
       <Header  msg={this.state.msg}    changeData={this.changeData}  personal={this}/>
       <Footer ref="footer"/>
       <button onClick={this.readerChild}>父组件主动获取子组件的value</button>
     </div>
   )
 }
}

export default Personal