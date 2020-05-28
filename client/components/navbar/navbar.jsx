import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import Component from "../../utils/component"

class MyNavbar extends Component {
  render() {
    return <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          { !this.props.trolo? <img
            src="https://i.imgur.com/BgRjhJV.png"
            alt="Frase de la decada logo"
          />
          : <img src="https://i.imgur.com/Ml69p4G.png" height="50px" width="50px"/>
        } 
        </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/qualifiers">Eliminatorias</Nav.Link>
        <Nav.Link href="/groupstage">Fase de Grupos</Nav.Link>
        <Nav.Link href="/bracketstage">Eliminacion Directa</Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link href="/profile">{ this.props.user.name }</Nav.Link>
        <Nav.Link onClick={() => this.logout()}>Cerrar sesion</Nav.Link>
      </Nav>
      
    </Navbar>
 
  }

  logout() {
    this.props.logout()
  }

}

export default MyNavbar;