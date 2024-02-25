import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
    const localCartData = localStorage.getItem("cartItems");
    const parsedData = JSON.parse(localCartData);

    if (!Array.isArray(parsedData)) return [];
    return parsedData;
}

const initialState = {
    cart: getLocalCartData(),
    totalItems: 0,
    toalPrice: 0,
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

    //to decrease the quantity in the cart 
    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id });
    }

    //to increase the quantity in the cart 
    const setIncrease = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id });
    }

    // to add data in localStorage
    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEM_PRICE" });
        localStorage.setItem("cartItems", JSON.stringify(state.cart));  //convert cart from object(array) to string because localStorage key's can only store string values
    }, [state.cart]);

    return <CartContext.Provider value={{ ...state, addToCart, removeFromCart, clearCart, setDecrease, setIncrease }}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartContextProvider, useCartContext };