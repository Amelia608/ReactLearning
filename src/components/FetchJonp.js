import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'

function FancyBorder(props){
  return  (
    <div className={`FancyBorder FancyBorder-${props.color}`}>
       {props.children}
    </div>
  )
}

function WelcomDialog(){
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">welcome</h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  )
}
class FetchJsonp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:[],
      style:{
        padding:'20px'
      }
     };
  }
  getData=()=>{
    var api="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";
    fetchJsonp(api).then(function(response) {
     return response.json()
    }).then(({result})=>{
      console.log('parsed json', result)
      this.setState({list:result})
    }).catch(function(ex) {
      console.log('parsing failed', ex)
  })

  }
  render() {
    return (
      <div className="component_fetch_jasonp" style={this.state.style}>
        <h1>fetch-jasonp获取数据</h1>
        <button onClick={this.getData}>获取数据</button>
        <ul className="mt20">
          {
            this.state.list.map(item=>{
              return (
                <li style={this.state.style} key={item.aid}>
                  {item.title}
                </li>
              )
            })
          }
        </ul>
        <WelcomDialog/>
      </div>
    );
  }
}

export default FetchJsonp;