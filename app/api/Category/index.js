import { URL_GET_CATEGORIES } from './urls';
import axios from 'axios';

const getAllCategories = () => {
    return axios
        .get(URL_GET_CATEGORIES, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
        .then(response => response.data.genres)
        .catch(err => Promise.reject(err));
};

export { getAllCategories };
