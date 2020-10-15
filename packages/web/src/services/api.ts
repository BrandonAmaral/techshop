import axios from 'axios';

const todoApi = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('@e-commerce:token')}`,
  },
});

export default todoApi;
