import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../containers/Home/Home';

export default () => {
    return (
        <BrowserRouter>
            <Header />

            <Route path="/" exact component={Home} />
            {/* <Route path="/category/:id" component={About} />
            <Route path="/movie/:id" component={Users} /> */}
        </BrowserRouter>
    );
};
