import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
import UserInfo from './UserInfo';
import { updateProfile } from '../../actions/auth';

class UserProfile extends Component {
  render() {
    let { user } = this.props;
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <ProfileForm user={user}
              onSubmit={values => this.props.updateProfile(values)}
              />
            </div>
            <div className="col-md-4">
              <UserInfo 
              userfirst={user.firstname}
              userlast={user.lastname}
              useravatar={user.image}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.Auth.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateProfile: (user) => dispatch(updateProfile(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);