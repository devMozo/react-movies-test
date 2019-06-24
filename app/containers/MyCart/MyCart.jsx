import React from 'react';
import { connect } from 'react-redux';
import './MyCart.scss';
import CartItem from '../../components/CartItem/CartItem';
import { removeItem } from '../../redux-app/actions/MyCartAction';

export class MyCart extends React.PureComponent {
    onRemoveItem = itemId => {
        const { removeItem } = this.props;
        removeItem(itemId);
    };

    render() {
        const { items } = this.props;

        return (
            <section className="MyCart">
                {items && items.length > 0 ? (
                    <ul className="MyCart__list">
                        {items.map(item => (
                            <CartItem item={item} onRemove={this.onRemoveItem} />
                        ))}
                    </ul>
                ) : (
                    <p className="MyCart__empty-message"> There isn't an item yet </p>
                )}
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.myCart,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeItem: itemId => {
            dispatch(removeItem(itemId));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MyCart);
