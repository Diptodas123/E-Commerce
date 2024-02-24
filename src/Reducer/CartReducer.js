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

        case "SET_DECREMENT":

            let updatedProduct = state.cart.map((currElem) => {
                if (currElem.id === action.payload) {
                    let decAmount = currElem.amount > 1 ? currElem.amount - 1 : 1;
                    return {
                        ...currElem,
                        amount: decAmount
                    };
                } else {
                    return currElem
                }
            });

            return {
                ...state,
                cart: updatedProduct
            };

        case "SET_INCREMENT":
            let updatedProducts = state.cart.map((currElem) => {
                if (currElem.id === action.payload) {
                    let incrAmount = currElem.amount >= currElem.max ? currElem.max : currElem.amount + 1;
                    return {
                        ...currElem,
                        amount: incrAmount
                    };
                } else {
                    return currElem
                }
            });

            return {
                ...state,
                cart: updatedProducts
            };

        case "CART_TOTAL_ITEM_PRICE":
            const { totalItems, totalPrice } = state.cart.reduce((accumulator, currElem) => {
                accumulator.totalItems += currElem.amount;
                accumulator.totalPrice += currElem.amount * currElem.price;
                return accumulator;
            }, {
                totalItems: 0,
                totalPrice: 0
            });

            return {
                ...state,
                totalItems,
                totalPrice
            };


        default:
            return state;
    }
}

export default CartReducer;