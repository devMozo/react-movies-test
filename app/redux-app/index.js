import { combineReducers } from 'redux';
import CategoryReducer from './reducers/CategoryReducer';
import MovieByCategoryReducer from './reducers/MovieByCategoryReducer';

export default combineReducers({
    category: CategoryReducer,
    movieByCategory: MovieByCategoryReducer,
});
