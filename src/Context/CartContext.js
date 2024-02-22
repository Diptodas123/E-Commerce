import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/CartReducer";

const CartContext = createContext();

const initialState = {
    cart: [],
    totalItems: 0,
    totalAmount: 0,
    shippingFee: 50000,
};

const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        //amout is quantity and product is an array
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
    }

    const removeFromCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
    }

    return <CartContext.Provider value={{ ...state, addToCart, removeFromCart }}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartContextProvider, useCartContext };