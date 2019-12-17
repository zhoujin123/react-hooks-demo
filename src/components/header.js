import React, { Component } from 'react';
import '../style/header.css'
import 'antd/dist/antd.css'
import {Icon, Badge, Dropdown, Menu} from 'antd'
import store from '../store'
import { changeLeftNav } from '../store/actionCreators'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = store.getState().header;
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    render() { 
        const userList = (
            <Menu>
                <Menu.Item>账号信息</Menu.Item>
                <Menu.Item>修改密码</Menu.Item>
                <Menu.Item>退出登录</Menu.Item>
            </Menu>
        );
        return ( 
            <div className="header flex">   
                <Icon type="menu-fold" style={{ fontSize: '18px', color: '#5C9ACE' }} onClick={() => this.changeLeftState()}/>
                <div className="flex">
                    <div style={{margin: '0 20px 0'}}>
                        <Icon type="reload" className="badge" style={{ fontSize: '18px', color: '#5C9ACE' }}/>
                    </div>
                    <Badge count={4}>
                        <Icon type="bell" style={{ fontSize: '18px', color: '#5C9ACE' }}/>
                    </Badge>
                    <Dropdown overlay={userList} className="user">
                        <div>{this.state.userName}</div>
                    </Dropdown>
                    <Icon type="user" style={{ fontSize: '18px', color: '#5C9ACE' }}/>
                </div>
            </div>
         );
    }
    changeLeftState(){
        const action = changeLeftNav()
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
}
 
export default Header;