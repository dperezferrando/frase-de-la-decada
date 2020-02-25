import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import Component from "../../utils/component"
import Explanation from "./explanation";
import Group from "./group";
import "./groupStage.css"
const GROUPS = ["A", "B", "C", "D", "E", "F to pay respects", "G", "H"]


class GroupStage extends Component {
  render() {
    return <span>
      <Row className="justify-content-md-center groupStage">
        <Col md={11}>
          <Explanation />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={11}>
          <Row>
            {this.props.groups.map((it, i) => <Group key={i} name={GROUPS[i]} frases={it} vote={::this.vote}/>)}
          </Row>
        </Col>
      </Row>
    </span>
  }

  vote(group, frases) {
    this.props.actions.vote("groupStage", group, frases);   
  }
}

export default GroupStage