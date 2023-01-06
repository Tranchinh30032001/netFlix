import { AcUnit } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <StyledHome>
        <AcUnit />
    </StyledHome>
  )
}

export default Home

const StyledHome = styled.div`
    background-color: ${({theme}) => theme.mainColor};
`