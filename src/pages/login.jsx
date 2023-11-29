import React, { useState, useEffect } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import Lottie from 'react-lottie-player';
import lottieJson from '../assets/Coale001.json';
import lottieJson2 from '../assets/PROCESS.json';

import { Link, useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { LoginApi } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';

function Login() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch()
  const userToken = useSelector(state => state.userToken);
  const [showFirstAnimation, setShowFirstAnimation] = useState(true);
  const [showSecondAnimation, setShowSecondAnimation] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [accountForm, setAccountForm] = useState({
    username: '',
    password: ''
  });

  const updaterudexuer = (newData) => {
    dispatch({ type: 'SET_USER', payload: newData })
  }

  const loginfun = async (e) => {
    e.preventDefault()
    if (!accountForm || !accountForm.username || !accountForm.password) {
      toast.error('no enough message')
      return;
    }
    e.preventDefault();
    if (accountForm.username && accountForm.password) {
      await LoginApi(accountForm).then((result) => {
        toast.success(`Hello ${result.username}!`, { autoClose: 1000 })
        localStorage.setItem('authToken', result.token)
        updaterudexuer(result)
        history.push('/home')
      }).catch((error) => {
        console.error('login default', error)
        toast.error('Password or Acount Error', { autoClose: 1000 })
      })
    }
  }

  const formChange = (e) => {
    const { name, value } = e.target
    setAccountForm({
      ...accountForm,
      [name]: value
    })
  }

  useEffect(() => {
    localStorage.removeItem('authToken')
    if (!userToken) {
      toast.error('token timeout', { autoClose: 1000 });
    }
    dispatch({ type: 'SET_TOKEN', payload: true });

  }, []);

  const handleFirstAnimationComplete = () => {
    setShowFirstAnimation(false);
    setShowSecondAnimation(true);
  };

  const handleSecondAnimationComplete = () => {
    setShowSecondAnimation(false);
    setShowForm(true);
  };

  return (
    <div className="login-page">
      <ToastContainer />
      {showFirstAnimation && (
        <div className="animation-container">
          <Lottie
            loop={false}
            animationData={lottieJson}
            play
            style={{ width: '70%', height: '100%' }}
            onComplete={handleFirstAnimationComplete}
          />
        </div>
      )}
      {showSecondAnimation && (
        <div className="animation-container">
          <Lottie
            loop={false}
            animationData={lottieJson2}
            play
            style={{ width: '100%', height: '100%' }}
            onComplete={handleSecondAnimationComplete}
          />
        </div>
      )}
      {showForm && (
        <div className="login-form">
          <h1>Login</h1>
          <form onSubmit={loginfun}>
            <div className="input-field">
              <FaUser />
              <input type="text" name='username' value={accountForm.username} onChange={formChange} placeholder="Username" />
            </div>
            <div className="input-field">
              <FaLock />
              <input type="password" name='password' value={accountForm.password} onChange={formChange} placeholder="Password" />
            </div>
            <button type="submit">Login</button>
          </form>
          <div className='login-from-otherbutton'>
            <Link to="/resgistion">No account? Please register</Link>
            <Link>Forget Password</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
