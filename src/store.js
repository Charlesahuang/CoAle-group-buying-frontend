// redux/store.js
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    cart: [],
    userToken: true
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return { ...state, userToken: action.payload };
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'CART':
            return { ...state, cart: [...state.cart, action.payload] };
        case 'UPDATE_CART_ITEM':
            const { itemId, count } = action.payload;
            if (count <= 0) {
                const newCart = state.cart.filter((item) => item.id !== itemId);
                return { ...state, cart: newCart };
            } else {
                let newCart = [...state.cart];
                const updatedCart = newCart.filter((item) => item.id === itemId);
                if (updatedCart.length > count) {
                    updatedCart.length = count;
                } else if (updatedCart.length < count) {
                    const firstItem = updatedCart[0];
                    for (let i = updatedCart.length; i < count; i++) {
                        updatedCart.push({ ...firstItem });
                    }
                }
                newCart = newCart.filter((item) => item.id !== itemId);
                newCart.push(...updatedCart);
                return { ...state, cart: newCart };
            }

        default:
            return state;
    }
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
export const dispatch = store.dispatch;
