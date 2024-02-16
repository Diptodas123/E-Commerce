import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer"

const ProductContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProdcuts: [],
}

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (URL) => {

        //to show loading in the first place
        dispatch({ type: "SET_LOADING" });  //it will call the reducer method of ProductReducer
        try {
            const response = await axios.get(URL);
            const products = await response.data;
            
            //will call the reducer method to set the products data with the products array as payload
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {

            //if we come accross some error while fetching products data from the API
            dispatch({ type: "API_ERROR" });
        }
    }

    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <ProductContext.Provider value={{ ...state }}>
            {children}
        </ProductContext.Provider>
    )
};

const useProductContext = () => {
    return useContext(ProductContext);
}

export { ProductProvider, useProductContext };