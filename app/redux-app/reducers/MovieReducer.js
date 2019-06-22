import { MOVIE_GET_FINISHED, MOVIE_GET_FINISHED_WITH_ERROR, MOVIE_GET_STARTED } from '../actions/MovieAction';

const initState = {
    movie: {},
    loading: false,
    error: false,
};

export default (state = initState, action) => {
    switch (action.type) {
        case MOVIE_GET_STARTED:
            state = {
                ...state,
                movie: {},
                loading: true,
                error: false,
            };
            break;
        case MOVIE_GET_FINISHED:
            state = {
                ...state,
                movie: action.payload,
                loading: false,
                error: false,
            };
            break;
        case MOVIE_GET_FINISHED_WITH_ERROR:
            state = {
                ...state,
                loading: false,
                error: true,
            };
            break;
    }

    return state;
};
