import * as React from 'react';
import ItemDescription from '../ItemDescription/ItemDescription';
import ItemBonus from '../ItemBonus/ItemBonus';
import ItemActions from '../ItemActions/ItemActions';
import ItemBrands from '../ItemBrands/ItemBrands';

export default () => {
    return (
        <section className="Item">
            <ItemDescription numberLogo={1} srcLogo="" description="" features={[]} count={3} />
            <ItemBonus benefit={200} />
            <ItemActions count={3} />
            <ItemBrands />
        </section>
    );
};
