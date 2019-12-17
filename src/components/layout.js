import React from 'react';
import Header from './header'
import LeftNav from './menu'
import '../style/layout.css'

const layout = () => {
    return (
        <div className="top">
            <Header/>
            <LeftNav/>
            <Home />
        </div>
    )
}

export default layout