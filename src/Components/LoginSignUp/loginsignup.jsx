import React, { useState } from 'react';
import './loginsignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

// Reusable Input Component
const InputField = ({ type, placeholder, icon }) => (
  <div className='input'>
    <img src={icon} alt='' />
    <input type={type} placeholder={placeholder} />
  </div>
);

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className="inputs">
        {action === 'Login' ? null : <InputField type="text" placeholder="Name" icon={user_icon} />}
        <InputField type="email" placeholder="Email Id" icon={email_icon} />
        <InputField type="password" placeholder="Password" icon={password_icon} />
      </div>

      {action === 'Sign Up' ? null : (
        <div className="forgot-password">
          Forget Password? <span>Click Here!!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
