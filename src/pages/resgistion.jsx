import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SIGNUP } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';


const RegistrationPage = () => {
  const history = useHistory()
  const [registrationForm, setRegistrationForm] = useState({
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    confirmpwd: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const sumbitSignUp = () => {
    if (registrationForm.password === registrationForm.confirmpwd) {
      const data = {
        username: registrationForm.username,
        first_name: registrationForm.first_name,
        last_name: registrationForm.last_name,
        password: registrationForm.password
      };

      SIGNUP(data).then((data)=>{
        toast.success('SIGNUP SUCCESS',{autoClose:1000})
        setTimeout(() => {
          history.push('/login')
        }, 2000);
      })
    }
  }

  return (
    <div className="registration-page">
      <ToastContainer/>
      <div className="registration-box">
        <h2>Welcome to CoAle</h2>
        <div className="input-group">
          <input type="text" id="Name" name="username" value={registrationForm.username} className="input-group-input" placeholder="Name" onChange={handleChange} />
        </div>
        <div className="input-group">
          <input type="text" id="firstName" name="first_name" value={registrationForm.first_name} placeholder="First Name" className='input-group-input' onChange={handleChange} />
        </div>
        <div className="input-group">
          <input type="text" id="lastName" name="last_name" value={registrationForm.last_name} className="input-group-input" placeholder="Last Name" onChange={handleChange} />
        </div>
        <div className="input-group">
          <input type="password" id="password" name="password" value={registrationForm.password} className="input-group-input" placeholder="Password" onChange={handleChange} />
        </div>
        <div className="input-group">
          <input type="password" id="reenterPassword" name="confirmpwd" value={registrationForm.confirmpwd} className="input-group-input" placeholder="Re-enter Password" onChange={handleChange} />
        </div>
        <button onClick={sumbitSignUp}>Create</button>
        <a href="/signin">Have an account? Sign in</a>
      </div>
    </div>
  );
};

export default RegistrationPage;
