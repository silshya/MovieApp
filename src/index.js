import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter>
    <Naviga />
    <Banner /> */}

    {/* <Navigation /> */}
    
    {/* <Routes> */}
    {/* <Route path='/latest' element={<Latest />}></Route>
    <Route path='/popular' element={<Popular />}></Route>
    <Route path='/comedy' element={<Comedy />}></Route> */}
    {/* <Route path='/mov' element={<Movies />}></Route> */}
    {/* <Route path="/movlatest" element={<Movie latest={latestMovies} ></Movie>}></Route>
    <Route path="/movpop" element={<Movie latest={popularMovies} ></Movie>}></Route>
    <Route path="/movcomedy" element={<Movie latest={comedyMovies} ></Movie>}></Route>
    <Route path="/detail" element={<Detail />}></Route>
    </Routes>
    </BrowserRouter> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
