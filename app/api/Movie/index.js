import { URL_GET_MOVIE } from './urls';
import Axios from 'axios';

const getMovieById = movieId => {
    return Axios.get(URL_GET_MOVIE(movieId), {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    })
        .then(response => {
            return response.data;
        })
        .catch(err => Promise.reject(err));
};

export { getMovieById };
