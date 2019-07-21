import React from "react";
// 事件方法
class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "我是组件信息",
            username: "itying"
        };
        this.getMsg = this.getMsg.bind(this);
    }
    run() {
        alert(`我是run方法`);
    }
    // 获取state中的数据  方法1：bind(this)
    changeState() {
        alert(this.state.msg);
    }
    // 获取state中的数据的第二种方法
    getMsg() {
        alert("获取数据中的第二种方法", this.state.msg);
    }
    // 获取state中的数据的第三种方法
    gerUsername = () => {
        alert(this.state.username);
    };
    // 改变数据
    setData=()=>{
      this.setState({
        msg:'我是组件信息 改变后的值'
      })
    }
    //执行方法传值
    setName(str){
      this.setState({
        username:str
      })
    }
    //事件
    render() {
        return (
            <div className="event_c">
                <h2>{this.state.username}</h2>
                <button onClick={this.run}>我是run方法</button>
                <hr />
                <button onClick={this.changeState.bind(this)}>
                    获取数据---第一种改变this指向的方法
                </button>
                <hr />
                <button onClick={this.getMsg}>
                    获取数据----第二种方法改变this指向的方法
                </button>
                <hr />
                <button onClick={this.gerUsername}>
                    获取数据----第三种方法改变this指向的方法
                </button>
                <hr/>
                <button onClick={this.setData}>改变设置state中的值</button>
                <hr/>
                <button onClick={this.setName.bind(this,'张三')}>执行方法传值</button>
            </div>
        );
    }
}
export default Event;
