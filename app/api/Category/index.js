import { URL_GET_CATEGORIES } from './urls';
import Axios from 'axios';

const getAllCategories = () => {
    return Axios.get(URL_GET_CATEGORIES, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    })
        .then(response => response.data.genres)
        .catch(err => err);
};

export { getAllCategories };
