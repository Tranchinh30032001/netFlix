import React from 'react'
import styled from 'styled-components'
import { StyledContainer } from '../StyledComponent/StyledContainer'
import { Search,Notifications, ArrowDropDown } from '@material-ui/icons'
import { StyledFlexBetween } from '../StyledComponent/StyledFlexBetween'
import {StyledFlexCenter} from '../StyledComponent/StyledFlexCenter'

function Navbar() {
  return (
    <StyledNavbar>
        <StyledContainer>
          <StyledFlexBetween>
            <StyledFlexCenter>
                <Logo src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' />
                <ul>
                    <li><a href="">HomePage</a></li>
                    <li><a href="">Series</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">New and Popular</a></li>
                    <li><a href="">My List</a></li>
                </ul>
            </StyledFlexCenter>
            <StyledFlexCenter>
                <Search />
                <span>KID</span>
                <Notifications />
                <img src="./Img/person.jpg" />
                <ArrowDropDown />
            </StyledFlexCenter>
          </StyledFlexBetween>
        </StyledContainer>
    </StyledNavbar>
  )
}

export default Navbar

const StyledNavbar = styled.div`
    .left{
        display: flex;
        align-items: center;
        justify-content: center;
        ul{
            display: flex;
        }
    }
    .right{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 5rem;
            height: 5rem;
        }
    }
`
const Logo = styled.img`
    width: 18rem;
    height: 5rem;
`