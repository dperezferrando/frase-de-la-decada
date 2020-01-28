import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import Component from "../../utils/component"

class MyNavbar extends Component {
  render() {
    return <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            src="staticos/assets/images/logo.png"
          //  className="d-inline-block align-top"
            alt="PBSTUFF logo"
          />
        </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/qualifiers">Eliminatorias</Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link >{ this.props.user.name }</Nav.Link>
        <Nav.Link onClick={() => this.logout()}>Cerrar sesion</Nav.Link>
      </Nav>
      
    </Navbar>
 
  }

  logout() {
    this.props.logout()
  }

}

export default MyNavbar;