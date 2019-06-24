export const MY_CART_ADD_ITEM = 'MY_CART_ADD_ITEM';
export const MY_CART_REMOVE_ITEM = 'MY_CART_REMOVE_ITEM';

export const addItem = item => ({
    type: MY_CART_ADD_ITEM,
    payload: item,
});

export const removeItem = idItem => ({
    type: MY_CART_REMOVE_ITEM,
    payload: idItem,
});
