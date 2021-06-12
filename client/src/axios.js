import axios from 'axios';
const instance = axios.create({

    // Base Domain Name

    baseURL: 'https://boringstuff.co/'

});

export default instance;