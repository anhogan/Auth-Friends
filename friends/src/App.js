import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import FriendList from './components/FriendsList';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/api/login">Login</Link>
        <Link to="/api/friends">Friends</Link>
      </nav>
      <Route path="/api/login" component={LoginPage} />
      <PrivateRoute exact path="/api/friends" component={FriendList} />
    </div>
  );
}

export default App;
