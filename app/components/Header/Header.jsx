import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default () => (
    <header className="Header">
        <Link to="/" data-cy="HeaderHome-link">
            Home
        </Link>
    </header>
);
