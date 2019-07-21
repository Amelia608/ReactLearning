import React from "react";
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username:'小明'
        };
    }
    run = event => {
        // alert(event.target);
        console.log('target',event.target,'value',event.target.innerHTML);
    }
    inputChange=(event)=>{
      this.setState({
        username:event.target.value
      })

    }
    getInput=()=>{
      alert(this.state.username)
    }
    refDOM=()=>{
      alert(this.refs.june.innerHTML)
    }
    changeUsername=()=>{
      this.setState({
        username:'张山'
      })
    }
    render() {
        return (
            <div className="list_C">
                <h2>
                    事件对象、键盘事件、表单事件、ref获取节点、react实现类似VUE双向数据绑定
                </h2>
                {/* 事件对象 */}
                <button onClick={this.run} aid="fhdf">事件对象</button>
                <hr/>
                <input type="text" onChange={this.inputChange}/><button onClick={this.getInput}>获取input值</button> 
                <h2>{this.state.username}</h2>   
                <hr/>            
                <h2>通过ref来获取dom节点</h2>
                <div ref="june">ref测试内容</div>
                <button onClick={this.refDOM}>通过ref来获取dom节点</button>
                <hr/>
                <br/>
                <input type="text" value={this.state.username} onChange={this.inputChange}/>
                <button  onClick={this.changeUsername}>改变姓名的值</button>
            </div>
        );
    }
}
export default List;
