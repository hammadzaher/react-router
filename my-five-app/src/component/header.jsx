import React from 'react'
import './component.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'

const header = () => {
  return (
    <div>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Link className='decor' to={"/"} href="#home">Home</Link>
            <Link className='decor' to={"/about"} href="#features">About</Link>
            <Link className='decor' to={"/contact"} href="#pricing">Contact</Link>
            <Link className='decor' to={"/login"} href="#pricing">Login</Link>
         </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default header
