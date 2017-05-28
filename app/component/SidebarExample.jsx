import React from 'react';
import uuid from 'uuid';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => (<div>首页</div>)
    },
    {
        path: '/about',
        sidebar: () => (<div>关于我们</div>)
    },
    {
        path: '/contact',
        sidebar: () => (<div>联系我们</div>)
    }
];

const SidebarExample = () => (
    <Router>
        <div style={{ display: 'flex' }}>
            <div
              style={{
                  padding: '10px',
                  width: '40%',
                  border: '1px'
              }}
            >
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/about">关于我们</Link></li>
                    <li><Link to="/contact">联系我们</Link></li>
                </ul>
                {
                    routes.map(route => (
                        <Route key={uuid.v4()} exact={route.exact} path={route.path} component={route.sidebar} />
                    ))
                }
            </div>
        </div>
    </Router>
);

export default SidebarExample;
