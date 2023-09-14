import React from 'react'
import {imdb,tomato} from './index'
import { Link } from 'react-router-dom'

const MovieList = ({ data }) => {
  
  return (
    <div className='movie_list'>
      <div className='list_header'>
        <div className='featured_movie'>Top Movies</div>
        <div className='see_more'>
            <div>See more </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M7.5 4.66668L13.3333 10.5L7.5 16.3333" stroke="#B91C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
      </div>
      <div className='card_list'>
        {/* {
          Cards.map(card => (
          <div className='list' key={card.id} data-testid='movie-card'>
            <img src={card.poster} alt="" data-testid='movie-poster'/>
            <div className='country' data-testid='movie-release-date'>{card.country}, {card.year}</div>
            <div className='title' data-testid='movie-title'>{card.title}</div>
            <div className='rating'>
              <div className='card_imdb_rating'>
                <img src={card.rating.imdb.logo} alt="" />
                <div>{card.rating.imdb.rating}</div>
              </div>
              <div className='card_rotten_rating'>
                <img src={card.rating.rotten.logo} alt="" />
                <div>{card.rating.rotten.rating}</div>
              </div>
              </div>
            <div className='genre'>{card.genre}</div>
          </div>

          ))
        } */}
        {
          data.map(data => (
            <div  key={data.id} data-testid='movie-card'>
              <Link to={`/movies/${data.id}`} className='list'>
                <img src={`https://image.tmdb.org/t/p/w780${data.poster_path}`} alt="" data-testid='movie-poster'/>
                <div className='country' data-testid='movie-release-date'>{data.release_date}</div>
                <div className='title' data-testid='movie-title'>{data.title}</div>
                <div className='rating'>
                  <div className='card_imdb_rating'>
                    <img src={imdb} alt="" />
                    <div>{data.vote_average}</div>
                  </div>
                  <div className='card_rotten_rating'>
                    <img src={tomato} alt="" />
                    <div>{data.vote_average}</div>
                  </div>
                  </div>
                <div className='genre'>Action</div>
            </Link>
              
          </div>
          ))
        }

      </div>
    </div>
  )
}

export default MovieList