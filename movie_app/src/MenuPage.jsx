import React from 'react'
import { tv, home, movie, tv_icon, upcoming, logout } from './assets/Task'

const MenuPage = () => {
  return (
    <div className='menu_page'>
      <div className='menu_logo'>
        <img src={tv} alt="" className=''/>
        <div className=''>MovieBox</div>
      </div>
      <ul className='menu_list'>
        <li className='li'>
          <img src={home} alt="" className='li_img'/>
          <span>Home</span>
        </li>
        <li className='li'>
          <img src={movie} alt="" className='li_img'/>
          <span>Movies</span>
        </li>
        <li className='li'>
          <img src={tv_icon} alt="" className='li_img'/>
          <span>TV Series</span>
        </li>
        <li className='li'>
          <img src={upcoming} alt="" className='li_img'/>
          <span>Upcoming</span>
        </li>
      </ul>
      <div className='start_playing'>
        <div className='start_playing_1'>Play movie quizes and earn free tickets</div>
        <div className='start_playing_2'>50k people are playing now</div>
        <button className='start_playing_3'>Start playing</button>
      </div>
      <div className='logout'>
          <img src={logout} alt="" className='logout_img'/>
          <span>Log out</span>
        </div>
    </div>
  )
}

export default MenuPage