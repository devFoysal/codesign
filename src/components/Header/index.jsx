import React from 'react'
import "./header.css"
import Logo from '../navbar/Logo'
import MenuList from '../navbar/MenuList'
const Header = () => {
  return (
    <header className='top-header'>
      <Logo />
     
      <MenuList />
    </header>
  )
}

export default Header