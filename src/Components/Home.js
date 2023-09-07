import React from 'react'

function Home({movies}) {


    const movie = movies ? movies[Math.floor(Math.random() * movies.length)] : null

    function shortenOverview(str, num){
        if(str.length > num) {
            return str.slice(0, num) + '...'
        } else return str
    }

    const apiSource = movie ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : null


  return (
    <div className='w-full h-[1200px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-full bg-gradient-to-r from-black'></div>
            {movie ? <img className='w-full h-full object-cover' alt={movie.title} src={movie.backdrop_path ? apiSource : movie.image}/> 
            : 
            null}
            <div className='fixed w-full top-[35%] p-5 md:p-8'>
                <h1 className='text-4xl text-red-500 md:text-6xl font-bold'>{movie ? movie.title : null}</h1>
                <div className='my-5'>
                    <button className='border bg-gray-400 text-black border-gray-300 py-2 px-5'>
                        Play
                    </button>
                    <button className='border  text-white border-gray-700 py-2 px-5 ml-4'>
                        Watch Later
                    </button>
                </div>
                <p className=' text-gray-500 text-sm'>Released: {movie ? movie.release_date : null}</p>
                <p className='w-full md:max-w-[75%] lg:max-w-[45%] text-gray-500'>{movie ? shortenOverview(movie.overview, 200) : null}</p>
            </div>
          
        </div>
    </div>
  )
}

export default Home