import { URL_DISCOVER_MOVIE_BY_GENRE } from './urls';
import axios from 'axios';

const getMovieByGenreID = (genreId, page) => {
    return axios
        .get(URL_DISCOVER_MOVIE_BY_GENRE(genreId, page), {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
        .then(response => response.data.results)
        .catch(err => Promise.reject(err));
};

export { getMovieByGenreID };
