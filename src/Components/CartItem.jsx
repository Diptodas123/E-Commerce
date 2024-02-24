import FormatPrice from "../Helpers/FormatPrice";
import CartAmoutToggle from "./CartAmoutToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../Context/CartContext";
import { NavLink } from "react-router-dom";

const CartItem = ({ id, name, image, color, price, amount }) => {

    const { removeFromCart, setDecrease, setIncrease } = useCartContext();

    //split id as CartItem id consists of productId+color where every color starts with #
    const urlId = id.split("#");    //urlId will contain [productId,color]

    return (
        <div className="cart_heading grid grid-five-column">
            <div className="cart-image--name">
                <div>
                    <figure>
                        <NavLink to={`/singleproduct/${urlId[0]}`} target="_blank"> <img src={image} alt={id} /></NavLink>
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
                amount={amount}
                setDecrease={() => setDecrease(id)}
                setIncrease={() => setIncrease(id)}
            />

            {/* Subtotal */}
            <div className="cart_hide">
                <p>
                    <FormatPrice price={price * amount} />
                </p>
            </div>

            <div>
                <FaTrash className="remove_icon" onClick={() => removeFromCart(id)} />
            </div>
        </div>
    )
}

export default CartItem;