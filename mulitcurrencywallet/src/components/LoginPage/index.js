import React, {useEffect, useState} from 'react';
import './LoginPage.css';
import DbsLogo from './assets/dbs_logo.png';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const loggedIn = localStorage.getItem('loggedIn');
        console.log("logged in",loggedIn)
        if(loggedIn === true) {
            window.location.href = "/Home"
        }
    }, [])
    
    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    
    const onLogin = () => {
        // call backend to check for login
        console.log('login button clicked', username, password);
        window.location.href = "/Home";
        localStorage.setItem('loggedIn', true);
      }
  return (
    <div className="login-container"> 
        <div className="input-container">
            <img src={DbsLogo} alt="" className="image" />
            <div className="sep-container">
                <label className="label-text">User ID</label>
                <input type="text" name="username" className="input" onChange={onChangeUsername} value={username} />
            </div>

            <div className="sep-container">
                <label className="label-text">Password</label>
                <input type="password" name="password" className="input" onChange={onChangePassword} value={password} />
            </div>

            <button type="submit" className="login-button" onClick={onLogin}>
                <h2 className="login-text">Login</h2>
            </button>

        </div>
    </div>
    
  )
}

export default LoginPage;