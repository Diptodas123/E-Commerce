import { createContext, useContext } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    return (
        <ProductContext.Provider value={{name:"dipto"}}>
            {children}
        </ProductContext.Provider>
    )
};

const useProductContext = () => {
    return useContext(ProductContext);
}

export { ProductProvider, useProductContext };