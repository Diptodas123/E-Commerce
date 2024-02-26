import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";

const PaymentCancel = () => {
    return (
        <Wrapper>
            <div className="cancel-page">
                <img src="https://thumbs.dreamstime.com/b/broken-credit-card-debt-bankruptcy-failed-money-transaction-vector-stock-illustration-262717746.jpg" alt="cancel" />
                <h2>Payment Error!</h2>
                <p>Sorry, for the inconvenience. Please try again later.</p>
                <NavLink to="/"><Button>Back to Home</Button></NavLink>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    padding:5rem 0;

    .cancel-page{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }

    .cancel-page img{
        height:20rem;
        width:30%;
        object-fit:cover;
    }

    .cancel-page h2{
        margin-top:1rem;
        color:red;
    }

    .cancel-page p{
    margin:2rem 0;
    }
`;

export default PaymentCancel;