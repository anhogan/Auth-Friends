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

  const editUser = user => {
    axiosWithAuth().put(`/api/friends/${user.id}`, {user})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteUser = id => {
    axiosWithAuth().delete(`/api/friends/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);

      });
  };

  return (
    <div className="friends">
      {friends.map((friend) => (
        <div key={friend.id} className="friend-container">
          <h2>{friend.name}</h2>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
          <button onClick={() => deleteUser(friend.id)}>Remove</button>
          <button onClick={() => editUser(friend)}>Edit</button>
        </div>
      ))}
      <PrivateRoute exact path="/api/friends" component={AddFriend} />
    </div>
  );
};

export default FriendList;