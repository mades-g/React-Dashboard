import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import Nav from './Nav';

class SideBar extends Component {

  state = {};

  render() {
    let {
      location
    } = this.props;

    return (
      <div className="sidebar">

        <div className="brand">
          <a href="" className="brand-name">
            <img src='https://customercentria.files.wordpress.com/2015/01/admin.png' alt="logo" className="logo" />
          </a>

        </div>

        <div className="sidebar-wrapper">
          <UserInfo />
          <div className="line"></div>
          <Nav />
        </div>
        <div
          className="sidebar-background"
        >
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  
});

export default withRouter(connect(mapStateToProps)(SideBar));