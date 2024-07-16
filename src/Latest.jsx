import React, { useEffect } from 'react'
import { useState } from 'react';
import axios, {} from 'axios'
import { imageUrl, latestMovies } from './url';
import { Card } from 'react-bootstrap';

// import { API_KEY } from './url';

const Latest = () => {
  const [latest, setlatest] = useState([])
 
  useEffect(() => {
   axios.get(latestMovies).then((res)=>setlatest(res.data.results));
    
  }, )
  // console.log(latest);
  return (
    <div>
      
    {  latest.map((obj) =>
       {
        return (
            
<Card style={{ width: "300px", height:"400px",margin:"10px 10px",float:"left"}}>
<Card.Img variant="top" src={imageUrl+obj.poster_path} style={{height:"200px"}}/>
<Card.Body style={{ width: '18rem',margin:"10px 10px"}}>
<Card.Title> ID: {obj.id}</Card.Title>
<Card.Title>TITLE: {obj.original_title}</Card.Title>
<Card.Title>LANGUAGE: {obj.original_language}</Card.Title>
<Card.Title>RELEASE DATE: {obj.release_date}</Card.Title>
  <Card.Title>POPULARITY: {obj.popularity}</Card.Title>
  <Card.Text>
   
  </Card.Text>
</Card.Body>
</Card>
        )}
        )}
        </div>
)
}
            
  


export default Latest