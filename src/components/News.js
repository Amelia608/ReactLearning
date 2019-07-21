import React from 'react'
class News extends React.Component{
  constructor(props){
    super(props);/*用于父子之间传值 固定写法*/
    this.state={
    }
  }
  render(){
    return (
      <div className="news_component">
        <ul>
          <li>列表项</li>
          <li>列表项</li>
          <li>列表项</li>
          <li>列表项</li>
        </ul>
      </div>
    )
  }
}
export default News 