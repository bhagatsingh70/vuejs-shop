import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7000/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer '+sessionStorage.getItem('loggedInToken');