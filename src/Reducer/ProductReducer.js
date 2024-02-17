const ProductReducer = (state, action) => {
    // if (action.type === "SET_LOADING") {
    //     return { ...state, isLoading: true };
    // } else if (action.tyoe === "API_ERROR") {
    //     return { ...state, isError: true, isLoading: false };
    // }
    // return state;

    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };

        case "SET_API_DATA":
            //to filter out the products which has featured attribute as true
            const featureData = action.payload.filter((product) => {
                return product.featured === true;
            });

            return {
                ...state,
                isLoading: false,
                isError: false,
                products: action.payload,
                featureProdcuts: featureData
            };

        case "API_ERROR":
            return {
                ...state,
                isError: true,
                isLoading: false
            };

        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            };

        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload
            };

        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true
            }

        default:
            return state;
    }
}

export default ProductReducer;