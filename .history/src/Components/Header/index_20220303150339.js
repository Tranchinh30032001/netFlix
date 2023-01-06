import React from 'react'

function Header({children, ...restProps}) {
  return (
    <Background>{children}</Background>
  )
}

export default Header

Header.Navbar = function HeaderNavbar(children, ...restProps){
    return;
}
Header.Logo = function HeaderLogo(children, ...restProps){
    return <Logo src = {...restProps} />
}
Header.Button = function HeaderButton(children, ...restProps){
    return;
}
Header.Content = function HeaderContent(children,...restProps){
    return;
}
Header.Title = function HeaderTitle(children, ...restProps){
    return;
}
Header.SubTitle = function HeaderSubTitle (children, ...restProps){
    return;
}