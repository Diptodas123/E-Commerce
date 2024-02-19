import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProducts: [],
    gridView: true,
    sortingValue: "lowest",
}

const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    // to set the grid view in the products page
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }

    // to set the list view in the products page
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" })
    }

    // Sorting function
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue });
    }

    //to sort the pruducts
    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS" })
    }, [state.sortingValue]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext = () => {
    return useContext(FilterContext);
}
export { FilterContextProvider, useFilterContext };