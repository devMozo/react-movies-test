import { combineReducers } from 'redux';
import CategoryReducer from './reducers/CategoryReducer';

export default combineReducers({
    category: CategoryReducer,
});
