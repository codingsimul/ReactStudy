import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios'; 
function header(){
    return(
        <div>
        <Navbar expand="lg" className="bg-body-tertiary container">
        <Container>
          <Navbar.Brand href="home">Junig</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="./App">Home</Nav.Link>
              <Nav.Link href="./homework">Link</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      </div>
    )
}
export default header;