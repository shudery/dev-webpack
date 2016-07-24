import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message, Carousel, Menu, Icon, Button} from 'antd';
import './style.scss';
import 'antd/dist/antd.min.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Nav = React.createClass({
  getInitialState() {
    return {
      current: 'mail',
    };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  },
  render() {
    return (
      <Menu className="nav" onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />imformation
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />great site
        </Menu.Item>
        <SubMenu title={<span><Icon type="home" />uestc</span>}>
          <MenuItemGroup title="分组1">
            <Menu.Item key="setting:1">选项1</Menu.Item>
            <Menu.Item key="setting:2">选项2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="分组2">
            <Menu.Item key="setting:3">选项3</Menu.Item>
            <Menu.Item key="setting:4">选项4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay" style={{float:'right'}}>
          <a href="http://www.alipay.com/" target="_blank"><Icon type="user" />user <Icon type="star-o" />sign up</a>
        </Menu.Item>
      </Menu>
    );
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  render() {
    return (
      <Carousel className="carousel" autoplay dots="false" effect="fade">
      	<div id="car-div-1"><div><h1>hello guy!</h1>
      	<p>You are using prebuilt antd,please use https://github.com/ant-design/babel-plugin-antd
      	to reduce app bundle size.
		</p>
		<Button type="Primary" size="large" id="button">Welcome</Button></div>
		</div>
      	<div id="car-div-2"><div><h1>hello guy!</h1>
      	<p>You are using prebuilt antd,please use https://github.com/ant-design/babel-plugin-antd
      	to reduce app bundle size.
		</p>
		<Button type="Primary" size="large" id="button">Welcome</Button>
		</div>
		</div>
      	
    	</Carousel>
    );
  }
}

ReactDOM.render(
	<div id="react-app">
		<Nav />
		<Header />
	</div>
	, document.getElementById('root'))