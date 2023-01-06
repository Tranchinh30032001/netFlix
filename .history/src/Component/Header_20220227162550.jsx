import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

function Header() {
  return (
    <StyledHeader>
        <Navbar />
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
    width: 100%;
    height: 8rem;
    padding: 2rem 0;
    border: 1px solid #000;
`