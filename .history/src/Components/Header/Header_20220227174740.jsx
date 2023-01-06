import { Notifications, Search } from '@material-ui/icons'
import styled from 'styled-components'
import React from 'react'

function Header() {
  return (
    <StyledHeader>
        <div className="left">
            <Logo src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt='Logo' />
            <ul className="navlink">
                <li><a href="">HomePage</a></li>
                <li><a href="">Series</a></li>
                <li><a href="">Movies</a></li>
                <li><a href="">New And Popular</a></li>
                <li><a href="">My list</a></li>
            </ul>
        </div>
        <div className="right">
            <Search />
            <span>KID</span>
            <Notifications />
        </div>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`

`
const Logo = styled.img``