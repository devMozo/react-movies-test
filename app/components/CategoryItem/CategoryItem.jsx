import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CategoryItem.scss';

const CategoryItem = ({ name, id }) => {
    return (
        <section className="CategoryItem">
            <Link to={`/category/${id}`}> {name} </Link>
        </section>
    );
};

CategoryItem.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
};

export default React.memo(CategoryItem);
