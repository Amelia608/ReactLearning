import React, { Component } from 'react';
import axios from 'axios'
class Axios extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      list:[]
    };
  }
  getData=()=>{
    var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';   //接口后台允许了跨域
    axios.get(api).then(({data})=>{
      console.log(data.result)
      this.setState({list:data.result})
    }).catch(()=>{
      console.log('请求数据失败')
    })
  }
  render() {
    return (
      <div  className="page_axios" style={{padding:'20px'}}>
        <h1>axios请求数据</h1>
        <button onClick={this.getData}>获取数据</button>
        <ul>
          {
            this.state.list.map(item=>{
              return (
                <li className="mt20" key={item.aid}>{item.title}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default Axios;