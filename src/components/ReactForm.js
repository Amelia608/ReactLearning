import React from 'react';
class ReactForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      sex:'1',
      city:'',
      hobby:[
        {
          title:'吃饭',
          checked:false
        },
        {
          title:'睡觉',
          checked:true
        },
        {
          title:'听歌',
          checked:true
        },
        {
          title:'运动',
          checked:false
        }
      ],
      citys:['上海','北京','深圳']
    }
  }
  handleName=(e)=>{
    this.setState({
      name:e.target.value
    })
  }
  handleSex=(e)=>{
    this.setState({
      sex:e.target.value
    })
  }
  handleHobby(index){
    console.log(index)
    const hobby=this.state.hobby;
    hobby[index].checked=!hobby[index].checked;
    this.setState({
      hobby
    })
  }
  handleCity=(e)=>{
    this.setState({
      city:e.target.value
    })
  }
  submit=(e)=>{
    e.preventDefault();
    console.log(this.state.name,this.state.sex,this.state.city,this.state.hobby)
  }
  render(){
    return (
      <div className="reactForm_C">
        <form onSubmit={this.submit}>
          姓名：<input type="text" value={this.state.naem} onChange={this.handleName}/><br/><br/>
          性别：<input type="radio" value="1" checked={this.state.sex==='1'} onChange={this.handleSex}/>女
                <input type="radio" value="2" checked={this.state.sex==='2'} onChange={this.handleSex}/>男<br/><br/>
          城市：<select value={this.state.city} onChange={this.handleCity}>
              {
                this.state.citys.map((el,key)=><option key={key}>{el}</option>)
              }
          </select><br/><br/>
          爱好：{
              this.state.hobby.map((el,key)=>{
                return (
                  <span key={key}>
                    <input type="checkbox" checked={el.checked} onChange={this.handleHobby.bind(this,key)}/>{el.title}
                  </span>
                )
              })
          }
          <br/> <br/>
          <input type="submit"  defaultValue="提交"/>
        </form>
      </div>
    )
  }
}
export default ReactForm