import axios from 'axios';
const instance = axios.create({

    // Base Domain Name

    baseURL: 'http://localhost:4444/'

});

export default instance;