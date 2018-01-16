import React, { Component } from 'react';
import { connect } from 'react-redux';

const UserInfo = ({
    userfirst,
    userlast,
    useravatar
  }) => (
    <div className="card card-user">
        <div className="image">
            <img src={useravatar} alt={userfirst + ' ' + userlast} />
        </div>
        <div className="content">
            <div className="author">
                <a href="https://github.com/mades-g">
                    <h4 className="title">
                        {userfirst + userlast}<br />
                        <small>mades-g</small>
                    </h4>
                </a>
            </div>
            <p className="description text-center">
                "Chaos is an order <br />
                yet undeciphered"<br />
            </p>
        </div>
        <hr />
    </div>
  )

export default UserInfo;