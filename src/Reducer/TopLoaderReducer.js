const TopLoaderReducer = (state, action) => {
    switch (action.type) {
        case "SHOW_LOADING_BAR":
            return {
                ...state,
                topLoaderProgress: 100
            };

        case "HIDE_LOADING_BAR":
            return {
                ...state,
                topLoaderProgress: 0
            };

        default:
            return state;
    }
}

export default TopLoaderReducer;