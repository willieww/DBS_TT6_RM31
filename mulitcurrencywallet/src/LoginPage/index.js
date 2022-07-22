import React, {useState} from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const onLogin = () => {
        // call backend to check for login
        console.log('login button clicked');
      }
  return (
    <div>
        <label>Username</label>
        <input type="text" name="username" />

        <label>Password</label>
        <input type="password" name="password" />

        <button type="submit" onClick={onLogin}>Login</button>
        
    </div>
  )
}

export default LoginPage;