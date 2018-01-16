import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const MobileMenu = ({
  location
}) => (
  <div>
    <div className="mobile-nav collapse navbar-collapse has-image"
    >
      <div className="logo">
        <a href="" className="simple-text">
          Init
      </a>
      </div>
      <ul className="nav navbar-nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-graph"></i>
            <p>Dashboard</p>
          </Link>
        </li>
        <li className={location.pathname === '/performance' ? 'active' : null}>
          <Link to="/performance">
            <i className="pe-7s-graph"></i>
            <p>Performance</p>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);


const mapStateToProps = state => ({
});

export default withRouter(
  connect(mapStateToProps)(MobileMenu)
);