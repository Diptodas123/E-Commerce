import { useState } from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmoutToggle from "./CartAmoutToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../Context/CartContext";

const CartItem = ({ id, name, image, color, price, amount, max }) => {

    const { removeFromCart } = useCartContext();

    const [quantity, setQuantity] = useState(amount);

    const setDecrease = () => {
        quantity > 1 ? setQuantity(quantity => quantity - 1) : setQuantity(1);
    }

    const setIncrease = () => {
        quantity < max ? setQuantity(quantity => quantity + 1) : setQuantity(max);
    }

    return (
        <div className="cart_heading grid grid-five-column">
            <div className="cart-image--name">
                <div>
                    <figure>
                        <img src={image} alt={id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                    <div className="color-div">
                        <p>color:</p>
                        <div className="color-style" style={{ backgroundColor: color, color: color }}> </div>
                    </div>
                </div>
            </div>

            {/* price */}
            <div className="cart_hide">
                <p>
                    <FormatPrice price={price} />
                </p>
            </div>

            {/* Quantity */}
            <CartAmoutToggle
                amount={quantity}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />

            {/* Subtotal */}
            <div className="cart_hide">
                <p>
                    <FormatPrice price={price * quantity} />
                </p>
            </div>

            <div>
                <FaTrash className="remove_icon" onClick={() => removeFromCart(id)} />
            </div>
        </div>
    )
}

export default CartItem;