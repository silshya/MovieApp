import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { imageUrl } from '../url';
import {  useNavigate } from 'react-router-dom';
import { detailtest } from '../App';



const Movie = ({latest}) => {
 
     
    const {first,setfirst,movie,setmovie,fitermov,setfitermov,searchtest}=useContext(detailtest)
      
    
    useEffect(() => {
        axios.get(latest).then((res)=>{setmovie(res.data.results);
          if (searchtest.length===0) {
            setfitermov(res.data.results)  
          }
        });
        
        },[movie])
        
        const navigate=useNavigate()
        const NavigateToDetail=(val)=>{
          
          
          setfirst(val)
          navigate("/detail")
       
         
        }
        
        
        const sampleDetail=useContext(detailtest)
  console.log(detailtest);
 useEffect(() => {
  sampleDetail.setshow(true)
 }, [])

  return (
    <div>
      
    {  fitermov.map((obj) =>
       {
        return (
            
<Card style={{ width: "300px", height:"450px",margin:"10px 10px",float:"left"}}>
<Card.Img variant="top" src={imageUrl+obj.poster_path} style={{height:"200px"}}/>
<Card.Body style={{ width: '18rem',margin:"10px 10px"}}>
<Card.Title> ID: {obj.id}</Card.Title>
<Card.Title>TITLE: {obj.original_title||obj.original_name}</Card.Title>
<Card.Title>LANGUAGE: {obj.original_language}</Card.Title>
<Card.Title>RELEASE DATE: {obj.release_date}</Card.Title>
  <Card.Title>POPULARITY: {obj.popularity}</Card.Title>
  
  <button onClick={()=>NavigateToDetail(obj)}>View</button>
 
  <Card.Text>
   
  </Card.Text>
</Card.Body>
</Card>
        )}
        )}
        </div>
)
}
  

export default Movie