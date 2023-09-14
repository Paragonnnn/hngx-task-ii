import React from 'react'
import { tomato,imdb,play } from './assets/Task'

const Description = () => {
  return (
    <div className='description'>
      <div className='desc_title'>John Wick 3 : Parabellum</div>
      <div className="desc_rating">
        <div className="imdb">
          <img src={imdb} alt="" />
          <div>
            86.0 / 100
          </div>
        </div>
        <div className="rotten_tomatoes">
          <img src={tomato} alt="" />
          <div>
            97%
          </div>
        </div>
      </div>
      <div className="desc_box">
      John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
      </div>
      <div className="watch_trailer_button">
        <img src={play} alt="" />
        <div>WATCH TRAILER</div>
      </div>
    </div>
  )
}

export default Description