import React, { Component } from 'react';
class Footer extends Component{
  constructor(props){
    super(props);
    this.state={
      msg:'我是底部组件'
    }
  }
  render(){
    return (
      <div className="footer">
        <h1>{this.state.msg}</h1>
      </div>
    )
  }
}
export default Footer;