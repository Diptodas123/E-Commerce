import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("cartItems");
    if (localCartData.length) {   //if the cart is not empty
        return JSON.parse(localCartData);   //to convert cart object(arr) from string to object(array)
    } else {
        return [];
    }
}

const initialState = {
    cart: getLocalCartData(),
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

    //to remove a single item from the cart
    const removeFromCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
    }

    //to clear the cart
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    }

    // to add data in localStorage
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(state.cart));  //convert cart from object(array) to string because localStorage key's can only store string values
    }, [state.cart]);

    return <CartContext.Provider value={{ ...state, addToCart, removeFromCart, clearCart }}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartContextProvider, useCartContext };