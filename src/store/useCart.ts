import {create} from 'zustand';
import {Product} from '../models/Product';


interface CartItem {
    productId: number;
    quantity: number;
}

type CartStore = {
    cartItems: CartItem[];
    addToCart: (productId: number) => void;
    removeOneItemFromCart: (productId: number) => void;
    removeAllSelectedItemFromCart: (productId: number) => void;
    clearAllItems: () => void;

}

function handleCartItemAddition(state: CartStore, productId: number) {

    let itemsWithGivenProductId = state.cartItems.filter((item) => item.productId === productId);
    if (itemsWithGivenProductId.length > 0) {
        itemsWithGivenProductId[0].quantity++;
        return {cartItems: [...state.cartItems]};
    } else {
        return {cartItems: [...state.cartItems, {productId: productId, quantity: 1}]};
    }
}

function handleSingleQuantityItemRemoval(state: CartStore, productId: number) {
    let itemsWithGivenProductId = state.cartItems.filter((item) => item.productId === productId);
    if (itemsWithGivenProductId.length > 0) {
        if (itemsWithGivenProductId[0].quantity > 1) {
            itemsWithGivenProductId[0].quantity--;
            return {cartItems: [...state.cartItems]};
        } else {
            return {cartItems: state.cartItems.filter((cartItem) => cartItem.productId !== productId)};
        }
    }
    return {cartItems: state.cartItems};
}

function handleAllSelectedItemRemoval(state: CartStore, productId: number) {
    return {cartItems: state.cartItems.filter((cartItem) => cartItem.productId !== productId)};
}

export const useCart = create<CartStore>((set) => ({
    cartItems: [],
    addToCart: (productId: number) => set((state) => handleCartItemAddition(state, productId)),
    removeOneItemFromCart: (productId: number) => set((state) => handleSingleQuantityItemRemoval(state, productId)),
    removeAllSelectedItemFromCart: (productId: number) => set((state) => handleAllSelectedItemRemoval(state, productId)),
    clearAllItems: () => set({cartItems: []})
}));
