import React from 'react';
import { Link } from 'react-router-dom';
import './MovieItem.scss';
import { MOVIES_IMG_PATH } from '../../constants/config';

const MovieItem = ({ id, title, posterPath, overview }) => {
    return (
        <li className="MovieItem">
            <header className="MovieItem__header">
                <picture className="MovieItem__pic">
                    <img src={MOVIES_IMG_PATH + posterPath} alt={title} />
                </picture>
                <h2> {title} </h2>
            </header>
            <p> {overview} </p>
            <Link to={`/movie/${id}`}> Go to the movie! </Link>
        </li>
    );
};

export default React.memo(MovieItem);
