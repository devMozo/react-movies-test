import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default () => (
    <header className="Header">
        <Link to="/">Home</Link>
    </header>
);
