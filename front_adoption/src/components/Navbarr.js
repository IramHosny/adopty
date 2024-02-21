import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function Navbarr() {
  return (
    <div> <Navbar style={{width:'100%',height:'100px'}} className="bg-body-tertiary"  >
    <Container  className="justify-content-between">
      <Navbar.Brand href="#home" style={{fontSize:'30px',fontStyle:'revert'}}> <Link to="/" style={{textDecoration:'none', color:'black'}}> <img style={{height:"200px",width:"200px",marginRight:'-50px'}} alt="dog" src="/logoadopty.png"/>  </Link>  </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" style={{fontFamily:'cursive'}}> <Link to="/about" style={{textDecoration:'none', color:'#f72585'}} > A propos de Adopty </Link></Nav.Link>
         
          <NavDropdown  style={{color:'#f72585', fontFamily:'cursive'}} title="Les animaux " id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> <Link to="/cats" style={{textDecoration:'none', color:'#f72585'}}> Chats </Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
               <Link to="/dogs" style={{textDecoration:'none', color:'#f72585'}}> Chiens </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link" style={{color:'#f72585',fontFamily:'cursive'}}> <Link to="/veterinarian" style={{textDecoration:'none', color:'#f72585'}}> Les vétérinaires  </Link></Nav.Link>
          <Nav.Link href="#link" style={{fontFamily:'cursive'}}> <Link to="/forum" style={{textDecoration:'none', color:'black'}}> Adopty Team </Link>  </Nav.Link>
          <Nav.Link href="#link" style={{color:'#f72585', fontFamily:'cursive'}}> <Link to="/contact" style={{textDecoration:'none', color:'#f72585'}} > Contact </Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    
    </Container>
  </Navbar></div>
  )
}

export default Navbarr