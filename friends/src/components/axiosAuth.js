import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
  });
};

const login = () => {
  axios.post('http://localhost:5000/api/login', userCredentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      props.history.push('http://localhost:5000/api/friends');
    })
}