import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const Home = () => (
    <p>首页</p>
);

const About = () => (
    <p>关于</p>
);

// 自定义链接
const CustomLinkExample = () => (
    <Router>
        <div>
            <OldSchoolMenuLink activeOnlyWhenExact={true} label="首页" to="/" />
            <OldSchoolMenuLink to="/about" label="关于" />
            <hr />
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
        </div>
    </Router>
);

// 自定义链接
const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
          <div className={match ? 'active' : ''}>
              {match ? '> ' : ''}<Link to={to}>{label}</Link>
          </div>
      )}
    />
);

OldSchoolMenuLink.propTypes = {
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    activeOnlyWhenExact: PropTypes.bool
};

export default CustomLinkExample;
