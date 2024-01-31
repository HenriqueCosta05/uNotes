import { FaSignInAlt } from "react-icons/fa"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import ButtonTheme from "../../theme/Buttons/Button";
export default function Header() {
  return (
    <>
      
      <Navbar expand='lg' className='bg-neutral-300'>
        <Container>
          <Navbar.Brand href="/" className='navbar-brand'>
            <h1 className="font-black text-purple-800 text-5xl">uNotes</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='me-auto' role="navigation">
            <Nav className="m-auto">
              <Nav.Link href="/#about" className='nav-link'><p className="font-bold text-purple-800 text-2xl mr-10 mt-3">About us</p></Nav.Link>
              <Nav.Link href="/#features" className='nav-link'><p className="font-bold text-purple-800 text-2xl mr-10 mt-3">Features</p></Nav.Link>
              <Nav.Link href="/#pricing" className='nav-link'><p className="font-bold text-purple-800 text-2xl mr-10 mt-3">Pricing</p></Nav.Link>
              <Nav.Link href="/login" className='nav-link'>
                <ButtonTheme/>
                <Button className="flex flex-nowrap btn-primary btn mt-1.5 ml-24">
                  <a href="/login" className="font-bold text-neutral-300 text-2xl no-underline flex mr-3">Login</a>
                  <FaSignInAlt className="text-2xl flex flex-nowrap text-neutral-300" />
                </Button>
                <ButtonTheme/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}