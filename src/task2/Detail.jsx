import React, { useContext, useEffect } from 'react'
import { detailtest } from '../App'
import { imageUrl } from '../url';
import { Rate} from 'antd';

const Detail = () => {
  const {setshow,first}=useContext(detailtest)
  
  console.log(detailtest);
 useEffect(() => {
  setshow(false)
 }, [])
 console.log(first);

  return (
    
     
   <div style={{height:"90vh",backgroundColor:"black"}}> 
  
    <div style={{display:"flex", justifyContent:"center", alignItems:"center" }}>
      
      <img src={imageUrl+first.backdrop_path} alt="" height="450vh" style={{borderRadius:"10%", marginTop:"50px"}} />
      <hr />
      
      <div>
      <h1 style={{textDecoration:"underline",letterSpacing:"4px", color:"white"}} >{first.original_title || first.original_name}</h1>
      
        <div style={{display:"flex"}}> 
        
        <button style={{backgroundColor:'white', width:"180px" }}>Popluarity:<br/> <b>{first.popularity}</b></button>
        <br />
        <button style={{backgroundColor:'white',width:"180px"}}>Original language: <br /><b>{first.original_language}</b></button>
        <br />
        <button style={{backgroundColor:'white',width:"230px"}}>Release Date:<br /> <b>{first.release_date}</b></button>
        
        </div>
        <h4 style={{color:"white",marginLeft:"19px"}}>Rating</h4> <Rate style={{marginLeft:"30px"}} allowHalf defaultValue={5} ></Rate>
     <hr style={{color:"white"}}/>
      <h6 style={{color:"white"}}>{first.overview}</h6>
      <br />
      <button style={{backgroundColor:"gray",width:"150px",marginLeft:"50px"}}>Watch Trailer</button>
      <button style={{backgroundColor:"gray",width:"150px",marginLeft:"50px"}}>To Watchlist</button>
      </div>
       </div>
  </div>
   
  )
}

export default Detail