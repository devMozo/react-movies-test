import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import Thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import appReducers from './redux-app';

const store = createStore(appReducers, applyMiddleware(Thunk));

export default ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('root'),
);
