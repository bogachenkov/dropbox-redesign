import React from 'react';
import avatar from '../images/navbar/user.png';

const User = () => {
  return (
    <div className="user">
      <img className="user__avatar" src={avatar} alt="Tim Van Damme" />
      <div>
        <p className="user__name">Tim Van Damme</p>
        <p className="user__type">Normal User</p>
      </div>
    </div>
  );
};

export default User;