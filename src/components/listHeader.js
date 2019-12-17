import React, { Component } from 'react';
import { Icon } from 'antd'
import { Link } from 'react-router-dom'

class ListHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    subtitle = () => {
        if(this.props.title){
            return <div className="flex">
                <Icon type="right" style={{marginRight: '8px'}}/>
                <div>{this.props.title}</div>
            </div>
        }
    }
    render() { 
        return ( 
            <div className="flex sub-title">
                <div className="flex flex-s">
                    <div className="fc-bl"><Link to="/home">首页</Link> </div>
                    {this.subtitle()}
                </div>
                {this.props.children}
            </div>
         );
    }
}
 
export default ListHeader;