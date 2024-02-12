import React from 'react'
import Navbar from '../Header/Header'
import styled from 'styled-components'
import Logo from '../Logo'

const Home = () => {
  return (
    <>

      <Wrapper className='test'>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  background-color:${({ theme }) => theme.colors.bg};
  min-height:100vh;
  overflow:hidden;
`;

export default Home;