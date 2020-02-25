import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosAuth';
import PrivateRoute from '../utils/PrivateRoute';
import AddFriend from './AddFriend';

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('/api/friends')
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  });

  const deleteUser = id => {
    axiosWithAuth().delete(`/api/friends/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);

      })
  }

  return (
    <div>
      {friends.map((friend) => (
        <div key={friend.id}>
          <h2>{friend.name}</h2>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
          <button onClick={() => deleteUser(friend.id)}>X</button>
        </div>
      ))}
      <PrivateRoute exact path="/api/friends" component={AddFriend} />
    </div>
  );
};

export default FriendList;