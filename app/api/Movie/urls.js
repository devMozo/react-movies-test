import { MOVIES_API_KEY } from '../../constants/config';
import { QUERY_API_KEY } from '../../constants/queryStrings';
import { URL_MOVIE_API } from '../config';

export const URL_GET_MOVIE = movieId => `${URL_MOVIE_API}/movie/${movieId}?${QUERY_API_KEY}=${MOVIES_API_KEY}`;
