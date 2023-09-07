import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import MovieList from "./Components/MovieList";
import Form from "./Components/Form";
import { useState, useEffect } from "react";


function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/Movies')
    .then(res => res.json())
    .then(movies => setMovies(movies))
  },[])
  // console.log(movies)


  return (
    <div className="bg-black h-24" >
      <NavBar />
        <Routes>
          <Route path="/" element={<Home movies={movies}/>} />
          <Route path="/movieList" element={<MovieList movies={movies} />} />
          <Route path="/form" element={<Form movies={movies} setMovies={setMovies} />} />
        </Routes> 
    </div>

  );
}

export default App;
