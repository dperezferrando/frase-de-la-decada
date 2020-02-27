import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import Component from "../../utils/component"
import Explanation from "./explanation";
import Group from "./group";
import "./groupStage.css"
const GROUPS = ["A", "B", "C", "D", "E", "F", "G", "H"]


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
            {this.props.groups.map((it, i) => <Group
              key={i}
              name={GROUPS[i]}
              frases={it}
              shouldVote={this.shouldVote(GROUPS[i])}
              vote={::this.vote}
              votes={this.getVotes(GROUPS[i])}
            />
          )}
          </Row>
        </Col>
      </Row>
    </span>
  }

  vote(group, frases) {
    this.props.actions.vote("groupStage", group, frases);   
  }

  shouldVote(group) {
    const { voted: { groupStage } } = this.props.user;
    return !_.includes(groupStage, group)
  }

  getVotes(group) {
    if(this.shouldVote(group))
      return [];
    return _.find(this.props.votes, { group }).frases 
  }
}

export default GroupStage