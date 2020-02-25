import React, { useState } from 'react';
import { axiosWithAuth } from './axiosAuth';

const LoginPage = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const login = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axiosWithAuth.post('http://localhost:5000/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push('http://localhost:5000/api/friends');
        setIsLoading(false);
      });
  };

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {isLoading ? (
        <div>
          Loading Friends...
        </div>
      ) : (
        <form onSubmit={login}>
          <div>
            <label htmlFor="username" />
            <input 
              id="username" 
              name="username" 
              type="text" 
              value={credentials.username} 
              onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password" />
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={credentials.password} 
              onChange={handleChange} />
          </div>
          <button>Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;