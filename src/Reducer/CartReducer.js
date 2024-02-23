const CartReducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART":

            let { id, color, amount, product } = action.payload;

            let existingProduct = state.cart.find(currElem =>
                currElem.id === id + color
            );

            if (existingProduct) {

                let updatedProduct = state.cart.map((currElem) => {
                    if (currElem.id === id + color) {
                        let newAmount = currElem.amount + amount;

                        if (newAmount >= currElem.max) {
                            newAmount = currElem.max;
                        }
                        
                        return {
                            ...currElem,
                            amount: newAmount
                        }
                    } else {
                        return currElem;
                    }
                });

                return {
                    ...state,
                    cart: updatedProduct
                };

            } else {
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
            }

        case "REMOVE_FROM_CART":

            const updatedCart = state.cart.filter((currElem) => {
                return currElem.id !== action.payload;
            });

            return {
                ...state,
                cart: updatedCart
            };

        case "CLEAR_CART":
            return {
                ...state,
                cart: [],
            };

        default:
            return state;
    }
}

export default CartReducer;