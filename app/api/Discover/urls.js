import { MOVIES_API_KEY } from '../../constants/config';
import { QUERY_API_KEY, QUERY_WITH_GENRES, QUERY_PAGE } from '../../constants/queryStrings';
import { URL_MOVIE_API } from '../config';

export const URL_DISCOVER_MOVIE_BY_GENRE = (genreID, page) =>
    `${URL_MOVIE_API}/discover/movie?${QUERY_API_KEY}=${MOVIES_API_KEY}&${QUERY_WITH_GENRES}=${genreID}&${QUERY_PAGE}=${page}`;
