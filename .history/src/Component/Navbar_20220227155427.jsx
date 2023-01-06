import React from 'react'
import styled from 'styled-components'
import { StyledContainer } from '../StyledComponent/StyledContainer'

function Navbar() {
  return (
    <StyledNavbar>
        <StyledContainer>
            <Img src='' />
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