import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';
import FormatPrice from '../Helpers/FormatPrice';
import { useCartContext } from '../Context/CartContext';

const PaymentSuccess = () => {

    const {totalPrice}=useCartContext();

    return (
        <Wrapper>
            <div className="success-page">
                <img src="https://www.kablooe.com/wp-content/uploads/2019/08/check_mark.png" alt="success" />
                <h2>Payment Successful!</h2>
                <p>Thank you! Your payment of <FormatPrice price={totalPrice} /> has been received.</p>
                <NavLink to="/"><Button>Back to Home</Button></NavLink>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding:5rem 0;

    .success-page{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }

    .success-page img{
        height:20rem;
        width:30%;
        object-fit:contain;
    }

    .success-page h2{
       color:green;
    }

    .success-page p{
       margin:2rem 0;
    }
`;
export default PaymentSuccess;