import axios from 'axios';

// this function sends in the authorization token
export const axiosWithAuth = () => {
    // grab the token from local storage
    const token = localStorage.getItem('token')

    // create the axios req with the base URL
    return axios.create({
        baseURL: 'http://localhost:5000/api',
        // pass in the token as the auth key in the header
        headers: {
            authorization: token
        }
    })
}