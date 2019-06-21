import * as React from 'react';
import Stars from '../Stars/Stars';
import { ItemDescriptionProps } from './typing';

export default (props: ItemDescriptionProps) => {
    const { numberLogo, srcLogo, description, features = [], count = 0 } = props;

    return (
        <section className="ItemDescription">
            <div className="ItemDescription__logo">
                <span> {numberLogo} </span>
                <picture>
                    <img src={srcLogo} />
                </picture>
            </div>
            <div className="ItemDescription__info">
                <p>{description}</p>
                <ul>
                    {features.map(feature => (
                        <li> {feature} </li>
                    ))}
                </ul>
                <Stars count={count} />
            </div>
        </section>
    );
};
