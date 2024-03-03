import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import './changepassword.css'
const ChangePassword = () => {
  const [userObject, setUserObject] = useState('');
  const [password, setPassword] = useState('');
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/api/v1/change-password`, {
        email: userObject,
        newPassword: password,
      });

      // Display success toast
      toast.success(response.data.message);
      setTimeout(()=>{
        window.location.href="/User/Login"
      })
    } catch (error) {
      // Display error toast
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="change-password-container">
      <h2 className="change-password-heading">Change Password</h2>
      <form onSubmit={handleChangePassword} className="password-form">
        <label className="form-label">
          Email:
          <input
            type="email"
            value={userObject}
            onChange={(e) => setUserObject(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          New Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </label>
        <button type="submit" className="form-button">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
