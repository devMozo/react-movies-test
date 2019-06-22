import { getMovieByGenreID } from '../../api/Discover/index';

export const MOVIE_BY_CATEGORY_GET_STARTED = 'MOVIE_BY_CATEGORY_GET';
export const MOVIE_BY_CATEGORY_GET_FINISHED = 'MOVIE_BY_CATEGORY_GET_FINISHED';
export const MOVIE_BY_CATEGORY_GET_FINISHED_WITH_ERROR = 'MOVIE_BY_CATEGORY_GET_FINISHED_WITH_ERROR';

export const getMoviesByCategoryStarted = () => ({
    type: MOVIE_BY_CATEGORY_GET_STARTED,
});

export const getMoviesByCategoryFinished = data => ({
    type: MOVIE_BY_CATEGORY_GET_FINISHED,
    payload: data,
});

export const getMoviesByCategoryFinishedWithError = err => ({
    type: MOVIE_BY_CATEGORY_GET_FINISHED_WITH_ERROR,
    payload: err,
});

export const getMovies = (genreId, page) => {
    return dispatch => {
        dispatch(getMoviesByCategoryStarted());

        getMovieByGenreID(genreId, page)
            .then(data => dispatch(getMoviesByCategoryFinished(data)))
            .catch(err => dispatch(getMoviesByCategoryFinishedWithError(err)));
    };
};
