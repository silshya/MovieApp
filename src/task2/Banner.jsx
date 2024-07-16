import React, { useEffect, useState } from 'react'
import { imageUrl, latestMovies } from '../url';
import axios from 'axios';


const Banner = () => {
        const [mov, setmov] = useState([])
        useEffect(() => {
         axios.get(latestMovies).then((res)=>{
          const movies=res.data.results;
          const randomID=Math.floor(Math.random() * movies.length);
          setmov(movies[randomID])
          console.log(randomID);
     })
  },[])
                return ( 
                  <div>
                  {mov && (
                    <div style={{ backgroundImage: `url(${imageUrl + mov.poster_path})`,height:"100vh",backgroundSize:"100% 100%",display:"flex", justifyContent:"center", alignItems:"center"}}>
                      <div style={{color:'white' , textAlign:"center"}}>
                      <h1 >{mov.original_title || mov.original_name}</h1>
                      <h2>{mov.overview}</h2>
                    </div>
                    </div>
                  )}
                </div>
              );
            }       

export default Banner