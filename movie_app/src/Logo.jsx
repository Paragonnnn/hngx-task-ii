import React from 'react'
import { tv } from './assets/Task/index'
const Logo = () => {
  return (
    <div className='logo'>
      <img src={tv} alt="" className='tv'/>
      <div className='logo_text'>MovieBox</div>
    </div>
  )
}

export default Logo