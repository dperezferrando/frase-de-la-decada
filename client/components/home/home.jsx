import React from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";
import Component from "../../utils/component"
import ReactMarkdown from "react-markdown";
import "./home.css";

class Home extends Component {
  render() {
  const input = '# Hola \n\n *aaaa*'
    return <Row className="justify-content-md-center groupStage">
      <Col md={11}>
        <div className="newsContainer">
          <ReactMarkdown source={input}/>
        </div>
      </Col>
    </Row>
  }


}

export default Home;