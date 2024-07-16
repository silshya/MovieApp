import React, { useContext, useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { detailtest } from '../App'

function Naviga() {
  const {searchtest,setsearchtest,handleSearch}=useContext(detailtest)
  
  console.log(searchtest);
 
  
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary " >
      <Container>
        <Navbar.Brand href="#home">Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#latest" ><Link style={{textDecoration:"none",color:"black"}} to={"/movlatest"}>Latest Movies</Link></Nav.Link>
            <Nav.Link href="#popular"><Link style={{textDecoration:"none",color:"black"}} to={"/movpop"}>Popular Movies</Link></Nav.Link>
            <Nav.Link href="#comedy"><Link style={{textDecoration:"none",color:"black"}} to={"/movcomedy"}>Comedy Movies</Link></Nav.Link>
             <input
           type="text"
           value={searchtest}
           onChange={(e) => setsearchtest(e.target.value)}
/>
        <button onClick={handleSearch} >search</button>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}

export default Naviga