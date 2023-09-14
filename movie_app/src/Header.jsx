import React from 'react'
import Navbar from './Navbar'
import Description from './Description'

const Header = ({handleToggle, toggle}) => {
  return (
    <div className={toggle ? 'blur header' : 'header'} >
      <Navbar handleToggle={handleToggle}/>
      <Description />
    </div>
  )
}

export default Header