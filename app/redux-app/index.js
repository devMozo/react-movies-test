import { combineReducers } from 'redux';
import CategoryReducer from './reducers/CategoryReducer';
import MovieByCategoryReducer from './reducers/MovieByCategoryReducer';
import MovieReducer from './reducers/MovieReducer';
import MyCartReducer from './reducers/MyCartReducer';

export default combineReducers({
    category: CategoryReducer,
    movieByCategory: MovieByCategoryReducer,
    movie: MovieReducer,
    myCart: MyCartReducer,
});
