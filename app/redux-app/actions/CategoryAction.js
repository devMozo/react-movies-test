import { getAllCategories } from '../../api/Category/index';

export const CATEGORY_GET_STARTED = 'CATEGORY_GET_STARTED';
export const CATEGORY_GET_FINISHED = 'CATEGORY_GET_FINISHED';
export const CATEGORY_GET_FINISHED_WITH_ERROR = 'CATEGORY_GET_FINISHED_WITH_ERROR';

export const getCategoryStarted = () => ({
    type: CATEGORY_GET_STARTED,
});

export const getCategoryFinished = data => ({
    type: CATEGORY_GET_FINISHED,
    payload: data,
});

export const getCategoryFinishedWithError = err => ({
    type: CATEGORY_GET_FINISHED_WITH_ERROR,
    payload: err,
});

export const getAll = () => {
    return dispatch => {
        dispatch(getCategoryStarted());

        getAllCategories()
            .then(data => getCategoryFinished(data))
            .catch(err => getCategoryFinishedWithError(err));
    };
};
