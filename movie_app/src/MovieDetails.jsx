import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import MenuPage from './MenuPage'

const MovieDetails = ({}) => {
  const { id } = useParams()
  const [datas , setDatas] = useState(null)
  const [loading, setLoading] = useState(null)

  
  
  //   const getData = async () =>{
  //    const res = await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ffbc2497269ce0f341542a9ec7df5486`)
     
  //     setDatas(res.data)
  //     console.log(datas);
    
  // }
  const api_key = import.meta.env.VITE_api_key
  useEffect(() => {
    async function getData() {
      setLoading(true)
      await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`).then((res) => {
      // console.log(res.data.results);
      setDatas(res.data)
      setLoading(false)
      console.log(datas);
    })
    }
    getData()
    console.log(datas);
  },[id])
  return (
    <div className='movie_details'>
      <div className='movie_details_menu'>
        <MenuPage />
      </div>
      <div className='movie_details_2'>
        {
          loading && <div className='loader'></div>
        }
        {datas && (
          <div >
            <div className='movie_details_img'>
              <img src={`https://image.tmdb.org/t/p/w780${datas.backdrop_path}`} alt="" />
            </div>
            
            <div className='movie_details_data'>
              <div className='data_title'>
                <span data-testid='movie-title' >{datas.title} </span>
                |
                <span data-testid='movie-release-date'>{datas.release_date} </span>
                |
                <div>
                  <span data-testid='movie-runtime'>{datas.runtime}</span>m
                </div>
                
                <div className='genre_list'>
                  {
                    (datas.genres).map((genre => (
                      <div key={genre.id} className='genre'>{genre.name}</div>
                    )))
                  }
                </div>

              </div>
              <div data-testid='movie-overview' className='movie_details_overview'>{datas.overview}</div>
            </div>
          </div>
        )}

      </div>
          
          {/* <h1>hi{id}{datas}</h1> */}
    </div>
  )
}

export default MovieDetails