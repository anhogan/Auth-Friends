import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { axiosWithAuth } from './components/axiosAuth';
import './App.css';

function App() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth.get('http://localhost:5000/api/friends')
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  });

  return (
    <div className="App">

    </div>
  );
}

export default App;
