import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import Component from "../../utils/component"
import Explanation from "./explanation";
import "./groupStage.css"

class GroupStage extends Component {
  render() {
    return <Row className="justify-content-md-center groupStage">
      <Col md={11}>
        <Explanation />
      </Col>
    </Row>
  }
}

export default GroupStage