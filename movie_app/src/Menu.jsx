import React from 'react'
import { circle, menu } from './assets/Task'

const Menu = ({handleToggle}) => {
  return (
    <div className='menu'>
      <div className='sign_in'>Sign In</div>
      <div className='menu_svg' onClick={handleToggle}>
        <img src={circle} alt="" />
        <img src={menu} alt="" className='menu_equal_to'/>
      </div>
    </div>
  )
}

export default Menu