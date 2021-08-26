import axios from 'axios';
import {store} from '../store/store.js'

const state = store.getState();

const apiAxios = axios.create({
    baseURL: 'https://zbccbeam.herokuapp.com/api/',
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${state.token}` 
    }
});

export default apiAxios;