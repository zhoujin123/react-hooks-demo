import React, { Component } from 'react'
import Header from './components/header'
import LeftNav from './components/menu'
import './style/global.css'
import './style/layout.css'

const height = window.innerHeight

export default class App extends Component {
  render() {
      return (
          <div style={{height: height}}>
              <Header/>
              <div className="content flex">
                <LeftNav/>
                <div className="content-right">
                  {this.props.children}
                </div>
              </div>
          </div>
      )
  }
}

