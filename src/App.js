import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Naviga from './task2/Naviga';
import Banner from './task2/Banner';
import { comedyMovies, latestMovies, popularMovies } from './url';
import Detail from './task2/Detail';
import Movie from './task2/Movie';
import { useState } from 'react';
import { createContext } from 'react';
const detailtest=createContext()


function App() {
  const [show, setshow] = useState(true)
  const [first, setfirst] = useState({})
  const [searchtest, setsearchtest] = useState("");
  const [movie, setmovie] = useState([])
  const [fitermov, setfitermov] = useState([])
  const handleSearch=()=>{
    const searchdata = movie.filter(obj=>(obj.original_title||obj.original_name&&(obj.original_title||obj.original_name).toLowerCase().includes(searchtest?.toLowerCase() ?? '')))
  console.log(movie);
  setfitermov(searchdata)
}
  console.log(fitermov);
  return (
    <div className="App">
      <detailtest.Provider value={{show,setshow,first,setfirst,searchtest,setsearchtest,movie,setmovie,handleSearch,fitermov,setfitermov}}>
    <BrowserRouter>
    <Naviga />
    {show === true ? <Banner />:""}
    <Routes>
    <Route path="/movlatest" element={<Movie latest={latestMovies} ></Movie>}></Route>
    <Route path="/movpop" element={<Movie latest={popularMovies} ></Movie>}></Route>
    <Route path="/movcomedy" element={<Movie latest={comedyMovies} ></Movie>}></Route>
    <Route path="/detail" element={<Detail />}></Route>
    </Routes>
    </BrowserRouter>
    
  </detailtest.Provider>
    
      
    </div>
  )
}

export default App;
export {detailtest}
