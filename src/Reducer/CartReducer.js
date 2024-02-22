const CartReducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART":

            let { id, color, amount, product } = action.payload;

            const cartProduct = {
                id: id + color, //to generate unique ids for same product having different colors
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock
            };

            return {
                ...state,
                cart: [...state.cart, cartProduct]
            };

        case "REMOVE_FROM_CART":

            const updatedCart = state.cart.filter((currElem) => {
                return currElem.id !== action.payload;
            });

            return {
                ...state,
                cart: updatedCart
            };

        default:
            return state;
    }
}

export default CartReducer;