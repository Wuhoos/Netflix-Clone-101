import { useState } from "react"

function Movie({movie}) {

  const originalMovieImage = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`


  const [picture, setPicture] = useState(true)

  function shortenOverview(str, num){
    if(str.length > num) {
        return str.slice(0, num) + '...'
    } else return str
}

  return (
    <li onMouseOver={()=> setPicture(false)} onMouseOut={() => setPicture(true)} >
      {picture ?  <img className='h-auto max-w-lg rounded-lg border-solid border-gray-300' alt={movie.title} src={movie.backdrop_path ? originalMovieImage : movie.image}/> 
      :
      <div className="text-white m-10" >
        <h3 className="text-red-500">{movie.title}</h3>
        <h4 className="m-4">{movie.release_date}</h4>
        <p>{shortenOverview(movie.overview, 150)}</p>
      </div>
      }
      
    </li>
  )
}

export default Movie