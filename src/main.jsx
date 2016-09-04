/*
 * 20160902 
 */


import React from 'react';
import ReactDOM from 'react-dom';
import {
  DatePicker, 
  message, 
  Carousel, 
  Menu, 
  Icon, 
  Steps,
  BackTop, 
  Popover,
  Card,
  Button
} from 'antd';
import 'antd/dist/antd.min.css';
import './style.scss';
import postDatas from './datas.js';
import TweenOne from 'rc-tween-one';
import Animate from 'rc-animate';
import QueueAnim  from 'rc-queue-anim';
import ScrollAnim from 'rc-scroll-anim';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Step = Steps.Step;

//顶部导航
const Nav = React.createClass({
    render: function() {
      return (
        <div id="nav">
         <Menu mode="horizontal" theme="dark">
          <Menu.Item key="homw">
            <a href="#post"><Icon type="mail" />主页</a>
          </Menu.Item>
          <Menu.Item key="app">
            <a href="#post"><Icon type="appstore" />文章</a>
          </Menu.Item>
          <SubMenu title={<span><Icon type="setting" />网站</span>}>
            <MenuItemGroup title="分组1">
              <Menu.Item key="setting:1">选项1</Menu.Item>
              <Menu.Item key="setting:2">选项2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="分组2">
              <Menu.Item key="setting:3">选项3</Menu.Item>
              <Menu.Item key="setting:4">选项4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="#steps"><Icon type="user" />关于</a>
          </Menu.Item>
          <Menu.Item key="user" style={{'float':'right'}}>
            <a href="#"><Icon type="star-o" />收藏</a>
          </Menu.Item>
         </Menu>
        </div>
      );
    }
})

//大图
const Img = React.createClass({
  render(){
    return(
    <Carousel id="div-image" effect="fade" dots="false" autoplay>
    <div><div className="div-image div-image-0"><p>用时间来换天赋，越努力会越幸运</p></div></div> 
    <div><div className="div-image div-image-1"><p>用时间来换天赋，越努力会越幸运</p></div></div> 
    <div><div className="div-image div-image-2"><p>用时间来换天赋，越努力会越幸运</p></div></div> 
    </Carousel>
      )
  }
})

//计划列表
const MyList = React.createClass({
  render(){
    return(
      <div id="steps">
      <Steps current={1}>
        <Step title="已完成" description="大三" />
        <Step title="进行中" description="找工作" />
        <Step title="待进行" description="毕业设计" />
        <Step title="待进行" description="步入社会" />
        <Step title="待进行" description="职业发展" />
      </Steps>
      </div>
      )
  }
})

//文章
const Main = React.createClass({
  getInitialState: function() {
    return {
      datas:postDatas
    };
  },
  render: function() {
    return (
      //划入动画
       //<QueueAnim delay={1000} duration={1000} interval={1000}>
      <div>
       
       {this.state.datas.map((val,i)=>(
        <div key={i}>
          <Card title={val.header} bordered="false" 
          extra={<span>{val.time}&nbsp;&nbsp;&nbsp;<a href="#">More</a></span>} id="post">
            <section className="post-content">
              <p>{val.section}</p>
            </section>
          </Card>
        </div>
       ))}
      </div>
      
        
      //</QueueAnim>

    );
  } 
})

//底部版权
const Footer = React.createClass({
  handle(e){
    e.preventDefault();
    message.success('成功复制：shudery@foxmail.com');
    let mail = 'shudery@foxmail.com';
    mail.execCommand("Copy");
  },
  render: function() {
    return (
      <footer id="footer">
        <div>
          <div id="info">@2015-2016 by&nbsp;
          <Popover content="daguo's github" trigger="hover">
            <span><a href="https://github.com/shudery">daguo</a></span>
          </Popover>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon type="mail" />
          <Popover content="shudery's mail" trigger="hover">
            <span><a href="#" onClick={this.handle}>&nbsp;shudery@foxmail.com</a></span>
          </Popover>
          </div>
        </div>
      </footer>
    );
  }
})

//遮罩层
const Cover = React.createClass({
  render(){
    return(
      <div id="cover"></div>
      )
  }
})


ReactDOM.render(
  <div id="react-app">
    <Nav />
    <Img />
    <Cover />
    <Main />
    <MyList />
    <Footer />
    <BackTop />
  </div>
  , document.getElementById('root'))