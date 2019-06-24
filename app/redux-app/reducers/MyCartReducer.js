import { MY_CART_ADD_ITEM, MY_CART_REMOVE_ITEM } from '../actions/MyCartAction';

const initState = {
    items: [],
};

export default (state = initState, action) => {
    switch (action.type) {
        case MY_CART_ADD_ITEM:
            state = {
                ...state,
                items: [...state.items, action.payload],
            };
            break;
        case MY_CART_REMOVE_ITEM:
            state = {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
            break;
    }

    return state;
};
