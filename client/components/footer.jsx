import React from 'react';
import Component from "../utils/component"
import { Col, Row } from "react-bootstrap";

class Footer extends Component {

  render() {
    return <Row className="justify-content-md-center">
      <Col md={11}>
        <div className="footer"> Punchbang's Stuff 2011 - { new Date().getFullYear() } </div>
      </Col>
    </Row>
  } 

}

export default Footer;