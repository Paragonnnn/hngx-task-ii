import Footer from "./Footer"
import MovieList from "./MovieList"
import Header from "./Header"
import Data from "./data"
import Axios from 'axios'
import { useState, useEffect } from "react"
import MenuPage from "./MenuPage"
import MovieDetails from "./MovieDetails"
import RoutePages from "./RoutePages"



function App() {
  const [data, setData] = useState([])
  const [toggle, setToggle] = useState(false)
  const [loading, setLoading] = useState(null)

  const handleToggle = () => {
    setToggle(prev => !prev)
  }
  const api_key = import.meta.env.VITE_api_key
  useEffect(() => {
    Axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`).then((res) => {
      // console.log(res.data.results);
      setData((res.data.results).slice(0,10))
      console.log(data);
    })

  },[])
console.log(data);
  return (
    <div className="body">
      {/* {
        data.map(data => (
          <div key={data.id}>
            <div>
              {data.title}, {data.release_date}, {data.vote_average}, {data.overview}
            </div>
            <a target="_blank" href={`https://image.tmdb.org/t/p/w780${data.poster_path}`}>click</a> 
            <img src={`https://image.tmdb.org/t/p/w780${data.poster_path}`} alt="" />
            <img src={`https://image.tmdb.org/t/p/w780${data.backdrop_path}`} alt="" />
          </div>
        ))
      } */}
      <Header backdrop={data.backdrop_path} handleToggle={handleToggle} toggle={toggle}/>
      <MovieList title={data.title} date={data.release_date} data={data}/>
      <Footer />
      {/* {toggle && <MenuPage />} */}
      {/* <RoutePages data={data}/> */}
      {/* <MovieDetails data={data}/> */}
    </div>
  )
}

export default App
