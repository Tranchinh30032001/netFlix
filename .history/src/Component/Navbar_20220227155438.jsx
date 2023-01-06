import React from 'react'
import styled from 'styled-components'
import { StyledContainer } from '../StyledComponent/StyledContainer'

function Navbar() {
  return (
    <StyledNavbar>
        <StyledContainer>
            <Img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' />
        </StyledContainer>
    </StyledNavbar>
  )
}

export default Navbar

const StyledNavbar = styled.div`
    
`
const Img = styled.img`
    object-fit: cover;
`