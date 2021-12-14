import { Nav, Navbar } from "react-bootstrap"

const NavBar = () => 

    (  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home" className="ml-5">Strive Books</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className=" ml-auto mr-5">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>)


           


export default NavBar