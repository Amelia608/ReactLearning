import React from 'react'
class Todolist2 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list:[
        {
          title:'录制vue',
          checked:true
        },
        {
          title:'录制React',
          checked:true
        },
        {
          title:'录制anglur',
          checked:true
        },
        {
          title:'录制HTML',
          checked:false
        },
      ]
    }
  }
  handleCheckbox=(k)=>{
    let list=this.state.list
    list[k].checked=!list[k].checked
    this.setState({list})
  }
  addData=(e)=>{
    if(!this.refs.title.value) return
    if(e.keyCode===13){
      let list=this.state.list
      list.push({title:this.refs.title.value,checked:false})
      this.refs.title.value=''
      this.setState({list})
    }
  }
  removeDate=(k)=>{
    let list=this.state.list
    list.splice(k,1)
    this.setState({list})
  }
  render(){
    return(
      <div className="page_todolist2">
        <div className="header">
          Todolist: <input type="text" ref="title" placeholder="请输入文本" onKeyUp={this.addData}/>
        </div>
        <div className="content">
          <h2>进行中</h2>
          <ul>
            {
              this.state.list.map((v,k)=>{
                if(!v.checked){
                  return (
                    <li  key={k}>
                      <input type="checkbox" id={`li${k}`} checked={v.checked} onChange={this.handleCheckbox.bind(this,k)}/> <label htmlFor={`li${k}`}> {v.title} </label>
                      <button className="del_btn_s ml10" onClick={this.removeDate.bind(this,k)}>删除</button>  
                    </li>
                  )
                }
              })
            }
          </ul>
        </div>
        <div className="content">
          <h2>已完成</h2>
          <ul>  
            {
              this.state.list.map((v,k)=>{
                if(v.checked){
                  return (
                    <li key={k}>
                      <input type="checkbox"  id={`le${k}`} checked={v.checked} onChange={this.handleCheckbox.bind(this,k)}/>
                      <label htmlFor={`le${k}`}>{v.title}</label>
                      <button className="del_btn_s ml10" onClick={this.removeDate.bind(this,k)}>删除</button>  
                    </li>
                  )
                }
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default Todolist2