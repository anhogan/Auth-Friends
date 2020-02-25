import React, { useState } from 'react';
import axios from 'axios';
import cuid from 'cuid';

const AddFriend = () => {
  const [newFriend, setNewFriend] = useState({
    name: '',
    age: '',
    email: '',
    id: ''
  });

  const handleChanges = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const age = parseInt(newFriend.age);
    axios.post('/api/friends', {
      id: cuid(),
      name: newFriend.name,
      email: newFriend.email,
      age: age
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h3>Add a Friend</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" />
          <input 
            id="name"
            name="name"
            type="text"
            value={newFriend.name}
            onChange={handleChanges} />
          </div>
          <div>
            <label htmlFor="age" />
            <input 
              id="age"
              name="age"
              type="text"
              value={newFriend.age}
              onChange={handleChanges} />
          </div>
          <div>
            <label htmlFor="email" />
            <input 
              id="email"
              name="email"
              type="text"
              value={newFriend.email}
              onChange={handleChanges} />
          </div>
          <button>Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriend;