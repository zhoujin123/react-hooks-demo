import React, { Component } from 'react'
import { HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import menuList from './config/routerConfig'
import App from './App'

class AppRouter extends Component {
    render() { 
        return (
            <HashRouter>
                <App>
                    <Switch>
                        {
                            menuList.map(sub => {
                                if(sub.subs){
                                    return sub.subs.map(item => 
                                        <Route 
                                            path={item.key}
                                            key={item.key}
                                            component={item.comp}
                                        />    
                                    )
                                }else{
                                    return <Route 
                                        path={sub.key}
                                        key={sub.key}
                                        component={sub.comp}
                                    />
                                }
                            })
                        }
                        {/* 初始进入页面重定向到首页 */}
                        <Redirect path="/" to="/home"/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
 
export default AppRouter;


