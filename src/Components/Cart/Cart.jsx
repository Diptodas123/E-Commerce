import styled from "styled-components";
import { useCartContext } from "../../Context/CartContext";
import CartItem from "../CartItem";
import { NavLink } from "react-router-dom";
import { Button } from "../Button";
import FormatPrice from "../../Helpers/FormatPrice";
import { loadStripe } from '@stripe/stripe-js';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

const Cart = () => {

  const [loading, setLoading] = useState(false);

  const { cart, clearCart, totalPrice, shippingFee } = useCartContext();
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  const { name, picture } = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : "";

  const handlePayment = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!name) {
      if (window.confirm("Login to place a order")) {
        loginWithRedirect();
        if (isAuthenticated) {
          localStorage.setItem("userData", JSON.stringify(user));
        } else {
          return;
        }
      }
    }

    const stripe = await loadStripe("pk_test_51OnhybSGyjAqVJnafFZdi9D97RPWbIe1aBnodJHynRbw7vF319LcHrxjr1g7hEQZSw8ph4KLVU8odJ6tgF5N1zDR00r7w2c8bR");
    const response = await fetch("http://localhost:5000/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart)
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    });

    if (result.error) {
      console.log(result.error);
    }
  }

  if (!cart.length) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="empty-cart" />
      </div>
    );
  }

  return (
    <Wrapper>
      <div className="container">

        {
          localStorage.getItem("userData") && (
            <div className="cart-user--profile">
              <img src={picture} alt={name} />
              <h2 className="cart-user--name">{name}</h2>
            </div>
          )
        }

        <div className="cart_heading grid grid-five-column">
          <p>Items</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />

        <div className="cart-item">
          {
            cart.map((currElem, index) => {
              return (
                <CartItem key={currElem.id} {...currElem} />
              );
            })
          }
        </div>

        <hr />
        <div className="cart-two-button">
          <NavLink to={"/products"}>
            <Button>Continue Shopping</Button>
          </NavLink>

          <Button className="btn btn-clear" onClick={clearCart}>Clear Cart</Button>
        </div>

        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={totalPrice} />
              </p>
            </div>
            <div>
              <p>Shipping Fee:</p>
              <p>
                <FormatPrice price={shippingFee} />
              </p>
            </div>
            <hr />
            <div>
              <p>Total:</p>
              <p>
                <FormatPrice price={totalPrice + shippingFee} />
              </p>
            </div>
          </div>
        </div>

        <div className="order-payment">
          <Button type="button" disabled={loading} className={loading ? "disabled" : ""}
            onClick={handlePayment}>
            {loading ? "loading..." : "Proceed to Checkout"}
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
padding: 2rem 0;

.grid-four-column {
  grid-template-columns: repeat(4, 1fr);
}

.grid-five-column {
  grid-template-columns: repeat(4, 1fr) 0.3fr;
  text-align: center;
  align-items: center;
}
.cart-heading {
  text-align: center;
  text-transform: uppercase;
}
hr {
  margin-top: 1rem;
}
.cart-item {
  padding: 3.2rem 0;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
}

.cart-user--profile {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 5.4rem;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }
  h2 {
    font-size: 2.4rem;
  }
}
.cart-user--name {
  text-transform: capitalize;
}
.cart-image--name {
  /* background-color: red; */
  align-items: center;
  display: grid;
  gap: 1rem;
  grid-template-columns: 0.4fr 1fr;
  text-transform: capitalize;
  text-align: left;
  img {
    max-width: 5rem;
    height: 5rem;
    object-fit: contain;
    color: transparent;
  }

  .color-div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    .color-style {
      width: 1.4rem;
      height: 1.4rem;

      border-radius: 50%;
    }
  }
}

.cart-two-button {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;

  .btn-clear {
    background-color: #e74c3c;
  }
}

.amount-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  font-size: 1.4rem;

  button {
    border: none;
    background-color: #fff;
    cursor: pointer;
  }

  .amount-style {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.btn};
  }
}

.remove_icon {
  font-size: 1.6rem;
  color: #e74c3c;
  cursor: pointer;
}

.order-total--amount {
  width: 100%;
  margin: 1.5rem 0;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  .order-total--subdata {
    border: 0.1rem solid #f0f0f0;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    padding: 3.2rem;
  }
  div {
    display: flex;
    gap: 3.2rem;
    justify-content: space-between;
  }

  div:last-child {
    background-color: #fafafa;
  }

  div p:last-child {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.heading};
  }
}

  .order-payment{
    display:flex;
    margin-top:2rem;
    justify-content:flex-end;
  }
  
  .disabled{
    cursor:no-drop;
  }

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid-five-column {
    grid-template-columns: 1.5fr 1fr 0.5fr;
  }
  .cart-hide {
    display: none;
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    gap: 2.2rem;
  }

  .order-total--amount {
    width: 100%;
    text-transform: capitalize;
    justify-content: flex-start;
    align-items: flex-start;

    .order-total--subdata {
      width: 100%;
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
  }
}
`;

export default Cart;