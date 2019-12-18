import React, { Component } from 'react'
import { Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import routers from '../config/routerConfig'
class ListHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headerList: [],
            path: props.location.pathname,
            subPath: props.location.pathname.split('/')[2],
            length: 0,
        }
    }
    componentDidMount() {
        this.getHeaders()
    }
    getHeaders = (lists = routers) => {
        lists.map(item => {
            if (item.subs) {
                this.getHeaders(item.subs)
            } else {
                if (
                    this.state.path == item.key ||
                    (item.key.includes(this.state.subPath) && item.key.includes('index'))
                ) {
                    this.state.headerList.push(item)
                    this.setState({ length: this.state.headerList.length })
                }
            }
        })
    }
    subtitle = () => {
        const length = this.state.headerList.length - 1
        return this.state.headerList.map((title, index) => {
            return (
                <div className="flex" key={index}>
                    <Icon type="right" style={{ marginRight: '8px' }} />
                    {index !== length ? (
                        <Link to={title.key}>{title.name}</Link>
                    ) : (
                        <div>{title.name}</div>
                    )}
                </div>
            )
        })
    }
    render() {
        return (
            <div className="flex sub-title">
                <div className="flex flex-s">
                    <div className="fc-bl">
                        <Link to="/home">首页</Link>{' '}
                    </div>
                    {this.subtitle()}
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(ListHeader)
