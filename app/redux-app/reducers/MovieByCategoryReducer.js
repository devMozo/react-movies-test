import {
    MOVIE_BY_CATEGORY_GET_STARTED,
    MOVIE_BY_CATEGORY_GET_FINISHED,
    MOVIE_BY_CATEGORY_GET_FINISHED_WITH_ERROR,
} from '../actions/MovieByCategoryAction';

const initState = {
    movies: [],
    loading: false,
    error: false,
};

export default (state = initState, action) => {
    switch (action.type) {
        case MOVIE_BY_CATEGORY_GET_STARTED:
            state = {
                ...state,
                movies: [],
                loading: true,
                error: false,
            };
            break;
        case MOVIE_BY_CATEGORY_GET_FINISHED:
            state = {
                ...state,
                movies: action.payload,
                loading: false,
                error: false,
            };
            break;
        case MOVIE_BY_CATEGORY_GET_FINISHED_WITH_ERROR:
            state = {
                ...state,
                loading: false,
                error: true,
            };
            break;
    }

    return state;
};
