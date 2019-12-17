import React, { Component } from 'react';
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import '../style/menu.css'
import menus from '../config/routerConfig'
const { SubMenu } = Menu;


class LeftNav extends Component {
    renderMenuItem = (menuList) =>{
        return menuList.map(item => {
            if(item.hidden) return
            if(item.subs){
                return (
                    <SubMenu key={item.key} title={
                        <span>
                            <Icon type={item.icon}/>
                            <span>{item.name}</span>
                        </span>
                    }>
                     { this.renderMenuItem(item.subs)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>
                {item.icon ? (
                    <Link to={item.key}>
                        <Icon type={item.icon}/>
                        <span>{item.name} </span>
                    </Link>
                ): 
                    <Link to={item.key}>
                        {item.name} 
                    </Link> 
                }
            </Menu.Item>
        })
    }
    render() { 
        return ( 
            <div className="menu">
                <Menu mode="inline" defaultSelectedKeys={[menus[0].key]}>
                    {this.renderMenuItem(menus)}
                </Menu>
            </div>
         );
    }
}

export default LeftNav;