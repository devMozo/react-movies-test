import {
    CATEGORY_GET_FINISHED,
    CATEGORY_GET_FINISHED_WITH_ERROR,
    CATEGORY_GET_STARTED,
} from '../actions/CategoryAction';

const initState = {
    categories: [],
    loading: false,
    error: false,
};

export default (state = initState, action) => {
    switch (action.type) {
        case CATEGORY_GET_STARTED:
            state = {
                ...state,
                categories: [],
                loading: true,
                error: false,
            };
            break;
        case CATEGORY_GET_FINISHED:
            state = {
                ...state,
                categories: action.payload,
                loading: false,
                error: false,
            };
            break;
        case CATEGORY_GET_FINISHED_WITH_ERROR:
            state = {
                ...state,
                loading: false,
                error: true,
            };
            break;
    }

    return state;
};
