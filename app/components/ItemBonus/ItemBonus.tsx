import * as React from 'react';
import { ItemBonusProps } from './typing';

export default (props: ItemBonusProps) => {
    const { benefit } = props;

    return (
        <section className="ItemBonus">
            <h4> Bonus </h4>
            <p> 100% up to </p>
            <b> ${benefit} </b>
        </section>
    );
};
