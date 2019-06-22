import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryItem.scss';

const CategoryItem = ({ name, id }) => {
    return (
        <section className="CategoryItem">
            <Link to={`/category/${id}`}> {name} </Link>
        </section>
    );
};

export default React.memo(CategoryItem);
