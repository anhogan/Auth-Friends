import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" />
          <input id="username" name="username" type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="password" />
          <input id="password" name="password" type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;