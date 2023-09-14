import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieDetails from './MovieDetails'
import Display from './Display'
import App from './App'

const RoutePages = ({data}) => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path={`/movies/:id`} element={<MovieDetails/>}/>
        </Routes>
    </div>
  )
}

export default RoutePages