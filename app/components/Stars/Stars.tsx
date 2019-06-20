import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StarsProps } from './typing';

export default (props: StarsProps) => {
    const { count = 0 } = props;
    const arrayStars = new Array(count);

    return (
        <ul className="Stars">
            {arrayStars.map(star => (
                <FontAwesomeIcon icon="star" />
            ))}
        </ul>
    );
};
