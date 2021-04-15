import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://comake-tt-webft-20.herokuapp.com/',
        headers: {
            Authorization: token
        }
    })
}