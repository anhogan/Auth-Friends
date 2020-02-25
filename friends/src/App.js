import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import FriendList from './components/FriendsList';
import './App.css';

function App() {
  const PrivateRoute = ({ component: FriendList, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <FriendList {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  return (
    <div className="App">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/friends">Friends</Link>
      </nav>
      <Route path="/login" component={LoginPage} />
      <PrivateRoute path="/friends" component={FriendList} />
    </div>
  );
}

export default App;
