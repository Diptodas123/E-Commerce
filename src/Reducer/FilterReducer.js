const FilterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload]
            };
        case "SET_GRID_VIEW":
            return {
                ...state,
                gridView: true
            }

        case "SET_LIST_VIEW":
            return {
                ...state,
                gridView: false
            }

        case "GET_SORT_VALUE":
            // let userSortValue = document.getElementById("sort");
            // let sortValue = userSortValue.options[userSortValue.selectedIndex].value

            return {
                ...state,
                sortingValue: action.payload
            }

        case "SORTING_PRODUCTS":

            let newSortData;

            const { filterProducts, sortingValue } = state;
            let tempSortProduct = [...filterProducts];

            const sortingProducts = (a, b) => {
                switch (sortingValue) {
                    case "lowest":
                        return a.price - b.price;
                    case "highest":
                        return b.price - a.price;
                    case "a-z":
                        return a.name.localeCompare(b.name);
                    case "z-a":
                        return b.name.localeCompare(a.name);
                    default:
                        return;
                }
            }

            newSortData = tempSortProduct.sort(sortingProducts);

            return {
                ...state,
                filterProducts: newSortData
            }

        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }
            };

        case "FILTER_PRODUCTS":

            let { allProducts } = state;
            let tempFilterProduct = [...allProducts];

            const { text, category, company } = state.filters;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((currentElem) => {
                    return currentElem.name.toLowerCase().includes(text);
                });
            };

            if (category !== 'all') {
                tempFilterProduct = tempFilterProduct.filter((currentElem) => {
                    return currentElem.category === category;
                })
            }

            if (company !== 'all') {
                tempFilterProduct = tempFilterProduct.filter((currentElem) => {
                    return currentElem.company === company;
                })
            }

            return {
                ...state,
                filterProducts: tempFilterProduct
            }

        default:
            return state;
    }
}

export default FilterReducer;