import React from 'react'
import { facebook, instagram, twitter, youtube } from './assets/Task'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='social'>
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </div>
      <div className="policy">
        <div>Conditions of Use</div>
        <div>Privacy & Policy</div>
        <div>Press Room</div>
      </div>
      <div className='foot'>
        © 2021 MovieBox by Adriana Eka Prayudha  
      </div>
    </div>
  )
}

export default Footer