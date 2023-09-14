import React from 'react'
import Logo from './Logo'
import Search from './Search'
import Menu from './Menu'

const Navbar = ({handleToggle}) => {
  return (
    <div className='navbar'>
      <Logo />
      <Search />
      <Menu handleToggle={handleToggle}/>
    </div>
  )
}

export default Navbar