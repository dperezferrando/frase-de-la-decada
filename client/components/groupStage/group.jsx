import React from 'react';
import { Row, Col } from "react-bootstrap";
import Component from "../../utils/component"
import "./groupStage.css"

class Group extends Component {
  render() {
    return <Col md={3}>
      <div>group {this.props.name}</div>
    </Col>
  }
}

export default Group;