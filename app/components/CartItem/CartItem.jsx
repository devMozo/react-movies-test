import React from 'react';
import { MOVIES_IMG_PATH } from '../../constants/config';
import { Link } from 'react-router-dom';
import './CartItem.scss';

const CartItem = ({ item, onRemove }) => {
    return (
        <li className="CartItem">
            <picture>
                <img src={`${MOVIES_IMG_PATH}${item.poster_path}`} />
            </picture>
            <Link className="CartItem__title" to={`movie/${item.id}`}>
                {item.title}
            </Link>
            <b className="CartItem__price"> ${item.budget} </b>
            <button className="CartItem__remove" onClick={() => onRemove(item.id)}>
                {' '}
                Remove{' '}
            </button>
        </li>
    );
};

export default React.memo(CartItem);
