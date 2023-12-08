import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../favicon2.png';
// ...

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a simple login check (replace this with your actual authentication logic)
    const correctUsername = 'admin';
    const correctPassword = 'admin';

    if (username === correctUsername && password === correctPassword) {
      // Successful login, navigate to the booking page
      navigate('/bus-list');
    } else {
      // Failed login, display an error message or take appropriate action
      alert('Invalid credentials. Please try again.');
    }

    // Reset the form fields after submission
    setEmail('');
    setPassword('');
    setUsername('');
  };

  return (
    <div className='login'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='title'>
          <h2>Login</h2>
        </div>
        <div className='logo-container'>
        <img src={logo} alt="Logo" className="logo" />
      </div>
        <div className='details'>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className='details'>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <div className='details'>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;