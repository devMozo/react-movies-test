import { getMovieById } from '../../api/Movie/index';

export const MOVIE_GET_STARTED = 'MOVIE_GET_STARTED';
export const MOVIE_GET_FINISHED = 'MOVIE_GET_FINISHED';
export const MOVIE_GET_FINISHED_WITH_ERROR = 'MOVIE_GET_FINISHED_WITH_ERROR';

export const getMovieStarted = () => ({
    type: MOVIE_GET_STARTED,
});

export const getMovieFinished = data => ({
    type: MOVIE_GET_FINISHED,
    payload: data,
});

export const getMovieFinishedWithError = err => ({
    type: MOVIE_GET_FINISHED_WITH_ERROR,
    payload: err,
});

export const getMovie = movieId => {
    return dispatch => {
        dispatch(getMovieStarted());

        getMovieById(movieId)
            .then(data => dispatch(getMovieFinished(data)))
            .catch(err => dispatch(getMovieFinishedWithError(err)));
    };
};
