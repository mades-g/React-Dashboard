import React, { Component } from 'react';
import { connect } from 'react-redux';


class ProfileForm extends Component {
  render() {
    let { user } = this.props;
    console.log(this);
    return(
      <div className="card">
      <div className="header">
        <h4 className="title">Edit Profile</h4>
      </div>
      <div className="content">
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label >Email address</label>
                <input type="email" className="form-control" placeholder="Email" defaultValue={user.email}/>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Username" defaultValue={user.password}/>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" placeholder="First Name" defaultValue={user.firstname} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" placeholder="Last Name" defaultValue={user.lastname} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Address</label>
                <input type="text" className="form-control" placeholder="Home Address" defaultValue="$HOME" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>City</label>
                <input type="text" className="form-control" placeholder="City" defaultValue="London" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Country</label>
                <input type="text" className="form-control" placeholder="Country" defaultValue="UK" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" className="form-control" placeholder="Phone number" defaultValue={user.phonenumber} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>About Me</label>
                <textarea rows="5" className="form-control" placeholder="Here can be your description" defaultValue="Chaos is an order yet undeciphered" />
              </div>
            </div>
          </div>

          <a href="#/"><button className="btn btn-info btn-fill pull-right">Update Profile</button></a>
          <div className="clearfix"></div>
        </form>
      </div>
    </div>
    )
  }
}

export default ProfileForm;
