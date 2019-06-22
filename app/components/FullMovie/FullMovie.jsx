import React from 'react';
import { MOVIES_IMG_PATH } from '../../constants/config';
import PropTypes from 'prop-types';
import './FullMovie.scss';

const FullMovie = ({ movie }) => {
    const {
        poster_path,
        vote_average,
        title,
        overview,
        production_companies,
        production_countries,
        status,
        budget,
        adult,
        release_date,
    } = movie;

    return (
        <section className="FullMovie">
            <header className="FullMovie__header">
                <picture>
                    <img src={`${MOVIES_IMG_PATH}${poster_path}`} />
                </picture>
                <section className="FullMovie__info">
                    <h2> {title} </h2>
                    <h4> Rating: {vote_average} </h4>
                </section>
            </header>
            <section className="FullMovie__description">
                <p> {overview} </p>
            </section>
            <h3> Features </h3>
            <ul className="FullMovie__features">
                <li>
                    {' '}
                    <b>Production Companies:</b>{' '}
                    {production_companies && production_companies.map(item => item.name).join(', ')}{' '}
                </li>
                <li>
                    {' '}
                    <b>Production Countries:</b>{' '}
                    {production_countries && production_countries.map(item => item.name).join(', ')}{' '}
                </li>
                <li>
                    {' '}
                    <b>Status:</b> {status}{' '}
                </li>
                <li>
                    {' '}
                    <b>Budget:</b> {budget}{' '}
                </li>
                <li>
                    {' '}
                    <b>Only Adult:</b> {adult ? 'Yes' : 'No'}{' '}
                </li>
                <li>
                    {' '}
                    <b>Release Date:</b> {release_date}{' '}
                </li>
            </ul>
        </section>
    );
};

FullMovie.propTypes = {
    movie: PropTypes.object,
};

export default React.memo(FullMovie);
