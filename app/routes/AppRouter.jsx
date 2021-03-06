import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../containers/Home/Home';
import Category from '../containers/Category/Category';
import Movie from '../containers/Movie/Movie';
import MyCart from '../containers/MyCart/MyCart';

export default () => {
    return (
        <BrowserRouter>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/category/:id" component={Category} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="/mycart" component={MyCart} />
        </BrowserRouter>
    );
};
