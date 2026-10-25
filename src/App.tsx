import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store/store";
import { addProduct, removeProduct, clearCart } from "./store/cartSlice";

function App() {
    const dispatch = useDispatch<AppDispatch>();
    const { items, total } = useSelector(
        (state: RootState) => state.cart
    );

    return (
        <div>
            <h1>Shopping Cart</h1>

            <button onClick={() => dispatch(addProduct({
                id: 1,
                name: "Laptop",
                price: 1000
            }))}>
                Add Laptop
            </button>

            {items.map(product => (
                <p key={product.id}>
                    {product.name} — ${product.price}
                    <button onClick={() => dispatch(removeProduct(product.id))}>
                        Remove
                    </button>
                </p>
            ))}

            <h2>Total: ${total}</h2>

            <button onClick={() => dispatch(clearCart())}>
                Clear Cart
            </button>
        </div>
    );
}

export default App;