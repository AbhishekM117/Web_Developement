import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-857f2.firebaseio.com/'
});

export default instance;