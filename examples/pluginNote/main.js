import $ from'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import AMUIReact,
{Table, Input, Form, Close, Button, Icon, Badge} 
from 'amazeui-react';

var Myform = React.createClass({
  //打开界面首次加载数据
  componentDidMount() {
    $.ajax({
      url: this.props.getUrl,
      dataType: 'json',
      cache: false,
      success: (datas)=>{
        this.setState({datas: datas});
      },
      error: (xhr, status, err) =>{
        console.error(this.props.getUrl, status, err.toString());
      }
    });
  },
  //生成新的Note
  createClick(){
    $.ajax({
      url: this.props.postUrl,
      data: {
        id: Math.round(Math.random()*1000000),
        note: this.state.note,
        detail: this.state.detail,
        level: this.state.level,
        timelabel : new Date().getTime(),
        date: timelabel(),
        status: (this.state.level == 'P1') ? 1: 0
      },
      dataType: 'json',
      cache: false,
      success: (datas) =>{
        console.log('CreateClick')
        this.setState({datas:datas,note:'',detail:'',level:'P3',status:0})
      },
      error:(xhr, status, err) =>{
        console.error(this.props.postUrl, status, err.toString());
      }
    });
  },
  getInitialState: ()=>
  ({
    note: '',
    detail: '',
    level: 'P3',
    status:0,
    datas:[]
  }),
  //表单输入控制
  handleChangeNote(event) {
    this.setState({note: event.target.value});
  },
  handleChangeDetail(event) {
    this.setState({detail: event.target.value});
  },
  handleChangeLevel(event) {
    this.setState({level: event.target.value});
  },
  //删除
  deleteClick(row){
   $.ajax({
          url: this.props.deleteUrl,
          data: {id:row.id},
          dataType: 'json',
          cache: false,
          success:(datas)=> {
            console.log('deleteClick')
            this.setState({datas:datas});
          },
          error:(xhr, status, err)=> {
            console.error(this.props.deleteUrl, status, err.toString());
          }
        });
  },
  //修改状态
  changeStatus(row){
  $.ajax({
        url: this.props.changeUrl,
        data: {id:row.id,status:row.status},
        dataType: 'json',
        cache: false,
        success:(datas)=> {
          console.log('changeStatus')
          this.setState({datas:datas});
        },
        error:(xhr, status, err)=> {
          console.error(this.props.changeUrl, status, err.toString());
        }
      });    
  },
  render(){
    return(
     <Table bordered hover radius responsive className="main">
        <thead>
          <tr>
            <th>level</th>
            <th>date</th>
            <th>id</th>
            <th>title</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {this.state.datas.slice(0,10).map(function (event,i) {
            if(event){
              return (
              <Myrow key={i} changeStatus={this.changeStatus} event={event} deleteClick={this.deleteClick} />
              )
            }
          }.bind(this))}
          <tr>
            <td></td>
            <td><Button radius amStyle="secondary" onClick={this.createClick}><Icon icon="plus" />create</Button></td>
            <td>
               <Input value={this.state.level} round type="select" onChange={this.handleChangeLevel}>
               <option value="P3"> P3 </option>
               <option value="P1"> P1 </option>
               <option value="P2"> P2 </option>
               <option value="P4"> P4 </option>
               </Input>
            </td>
            <td><Input value={this.state.note} round placeholder="note" onChange={this.handleChangeNote}/></td>
            <td><Input value={this.state.detail} round placeholder="detail" onChange={this.handleChangeDetail}/></td>
          </tr>
        </tbody>
      </Table> 
      )
  }
})

var Myrow = React.createClass({
  handleStatus(){
    this.props.changeStatus(this.props.event);
  },
   deleteClick(){
    this.props.deleteClick(this.props.event);
  },
  render(){
    var event = this.props.event;
    let className = '';
      if(event.status==1){
        className = 'am-active'
      }else if(event.status ==2){
        className = 'am-disabled'
      };
    return(
    <tr className={className}>
      <td>{event.level}</td>
      <td>{event.date}</td>
      <td>
        <Button radius amSize='xs' amStyle={(event.status=='2')?'success':'danger'} onClick={this.handleStatus} radius> </Button>
        <Close onClick={this.deleteClick} icon spin/>
      </td>
      <td>{event.note}</td>
      <td><a href={event.detail} target="_blank">{event.detail}</a></td>
    </tr>
  );
  }
})

ReactDOM.render(
  <Myform 
  getUrl="https://pluginnote.herokuapp.com/getdatas" 
  deleteUrl="https://pluginnote.herokuapp.com/deletedata" 
  changeUrl="https://pluginnote.herokuapp.com/changedata"
  postUrl="https://pluginnote.herokuapp.com/postdatas"/>,
  document.getElementById('content')
);
const timelabel = () => {
  let date = new Date(),
  year = date.getFullYear(),
  day = date.getDate(),
  month = date.getMonth(),
  hour = date.getHours(),
  min = date.getMinutes();
  if(hour < 10){
    hour = '0'+hour;
  }
  if(min < 10){
    min = '0'+min;
  }
  return (year + '-' +month +'-' + day +'  ' +hour +':' + min); 
}
