import React from 'react';
import { Link } from 'react-router-dom';
import './MovieItem.scss';
import { MOVIES_IMG_PATH } from '../../constants/config';
import PropTypes from 'prop-types';

const MovieItem = ({ id, title, posterPath, overview }) => {
    return (
        <li className="MovieItem" data-cy="MovieItem">
            <header className="MovieItem__header">
                <picture className="MovieItem__pic">
                    <img src={MOVIES_IMG_PATH + posterPath} alt={title} />
                </picture>
                <h2> {title} </h2>
            </header>
            <p> {overview} </p>
            <Link to={`/movie/${id}`} data-cy="MovieItem-link">
                {' '}
                Go to the movie!{' '}
            </Link>
        </li>
    );
};

MovieItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    posterPath: PropTypes.string,
    overview: PropTypes.string,
};

export default React.memo(MovieItem);
