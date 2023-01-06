import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <StyledHome>Home</StyledHome>
  )
}

export default Home

const StyledHome = styled.div`
    background-color: ${({theme}) => theme.mainColor};
`