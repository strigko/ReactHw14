import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface Product {
    id: number,
    name: string,
    price: number;
}

interface CartState {
    items: Product[];
    total: number;
}

const initialState: CartState = {
    items: [],
    total: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.items.push(action.payload);
            state.total += action.payload.price;
        },

        removeProduct: (state, action: PayloadAction<number>) => {
            const index = state.items.findIndex(
                item => item.id === action.payload
            );

            if (index !== -1) {
                state.total -= state.items[index].price;
                state.items.splice(index, 1);
            }
        },

        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        }
    }
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;