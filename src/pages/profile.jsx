import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom"

const ProfilePage = () => {
  const history = useHistory()
  const userData = useSelector(state => state.user);
  const [profile_user, setprofile_user] = useState()
  useEffect(() => {
    setprofile_user(userData)
  }, [userData])
  const reloadPage = () => {
    localStorage.removeItem('authToken')
    window.location.reload()
  }
  const toOrderList = () => {
    history.push('/order')
  }
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-header-down">
          <img src="https://i.postimg.cc/5tXRX1VN/c96e520d2659c1f195ca18f804a58f5.png" alt="user_logo" className="profile_user-avatar" />
          <div className="profile_user-info">
            {
              profile_user && (
                <>
                  <p>username:{profile_user.username}</p>
                  <p>first_name:{profile_user.first_name}</p>
                  <p>last_name:{profile_user.last_name}</p>
                </>
              )
            }
          </div>
        </div>
      </div>
      <div className="profile-options">
        <div className="profile_option">Edit Profile</div>
        <div className="profile_option">Language & Currency</div>
        <div className="profile_option">Feedback</div>
        <div className="profile_option" onClick={toOrderList}>My Order</div>
        <div className="profile_option">Terms & Conditions</div>
        <div className="profile_option" onClick={reloadPage}>Logout</div>
      </div>
    </div>
  );
};

export default ProfilePage;
