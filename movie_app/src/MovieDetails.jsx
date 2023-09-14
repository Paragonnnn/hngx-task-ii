import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'

const MovieDetails = ({}) => {
  const { id } = useParams()
  const [datas , setDatas] = useState(null)
  const [loading, setLoading] = useState(null)

  
  
  //   const getData = async () =>{
  //    const res = await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ffbc2497269ce0f341542a9ec7df5486`)
     
  //     setDatas(res.data)
  //     console.log(datas);
    
  // }
  useEffect(() => {
    async function getData() {
      setLoading(true)
      await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ffbc2497269ce0f341542a9ec7df5486`).then((res) => {
      // console.log(res.data.results);
      setDatas(res.data)
      setLoading(false)
      console.log(datas);
    })
    }
    getData()

  },[id])
  return (
    <div>
      {datas && (
        <div >
          <img src={`https://image.tmdb.org/t/p/w780${datas.backdrop_path}`} alt="" />
          <div>
            <span data-testid='movie-title'>{datas.title} </span>
            <span data-testid='movie-release-date'>{datas.release_date} </span>
            <span data-testid='movie-runtime'>2h 10m</span>
          </div>
          <div data-testid='movie-overview'></div>
        </div>
      )}
          
          {/* <h1>hi{id}{datas}</h1> */}
    </div>
  )
}

export default MovieDetails