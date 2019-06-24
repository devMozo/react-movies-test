import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CategoryItem.scss';

const CategoryItem = ({ name, id }) => {
    return (
        <section className="CategoryItem" data-cy="CategoryItem">
            <Link to={`/category/${id}`} data-cy="CategoryItem-link">
                {' '}
                {name}{' '}
            </Link>
        </section>
    );
};

CategoryItem.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
};

export default React.memo(CategoryItem);
