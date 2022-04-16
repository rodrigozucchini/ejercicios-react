import axios from 'axios';

//Default config por AXIOS

export default axios.create(
    {
        baseURL: 'https://api.chucknorris.io/jokes/random',
        responseType: 'json',
        timeout: 5000
    }
)