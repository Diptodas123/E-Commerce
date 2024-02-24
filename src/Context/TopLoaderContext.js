import { createContext, useContext, useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import reducer from "../Reducer/TopLoaderReducer";

const TopLoaderContext = createContext();
const initialState = {
    topLoaderProgress: 0
}

const TopLoaderProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const location = useLocation();

    //to display top-loading-bar
    useEffect(() => {
        dispatch({ type: "SHOW_LOADING_BAR" });
        const timeoutId = setTimeout(() => {
            dispatch({ type: "HIDE_LOADING_BAR" });
        }, 1000);
        return () => clearTimeout(timeoutId)
    }, [location.pathname]);

    return <TopLoaderContext.Provider value={{ ...state }}>
        {children}
    </TopLoaderContext.Provider>
}

const useTopLoaderContext = () => {
    return useContext(TopLoaderContext);
}

export { TopLoaderProvider, useTopLoaderContext }
