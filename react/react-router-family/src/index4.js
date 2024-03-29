import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// 路由配置
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <h2>Home</h2>
    }, {
        path: '/bubblegum',
        main: () => <h2>bubblegum</h2>
    }, {
        path: '/shoelaces',
        main: () => <h2>shoelaces</h2>
    }
];
function SidebarExample() {
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <div style={{
                    padding: "10px",
                    width: '40%',
                    background: "#0f0f0f",
                }}>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/bubblegum">Bubblegum</Link>
                        </li>
                        <li>
                            <Link to="/shoelaces">Shoelaces</Link>
                        </li>
                    </ul>
                </div>
                <div style={{
                    flex: 1,
                    padding: '10px'
                }}>
                    {routes.map((route,index)=>{
                        return <Route key={index} path={route.path} exact={route.exact} component={route.main}> </Route>
                    })}
                </div>

            </div>
        </Router>
    )
}
ReactDOM.render(<SidebarExample />, document.getElementById('root'))
