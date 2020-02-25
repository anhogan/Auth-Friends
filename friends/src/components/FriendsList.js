import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/friends')
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      {friends.map((friend) => (
        <div key={friend.id}>
          <h2>{friends.name}</h2>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
        </div>
      ))}
    </div>
  );
};

export default FriendList;