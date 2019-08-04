import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      msg:'我是子组件的msg的数据'

    }
  }
  render(){
    return (
      <div className="component_header">
        我是头部组件
        <h1>{this.props.msg}   {this.props.num}</h1>
        <button onClick={this.props.changeData}>调用父组件的方法</button>
        <br/>
        <button className="mt20" onClick={this.props.personal.changeData}>通过将整个父组件传个子组件，调用子组件的方法</button>
        <br/>
        <button className="mt20" onClick={this.props.personal.getChild.bind(this,this.state.msg)}>子组件传值给发组件</button>
      </div>
    )
  }
}
Header.defaultProps={
  msg:1
}
Header.propTypes={
  num:PropTypes.number
}
export default Header