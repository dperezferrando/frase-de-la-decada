import React from 'react';
import Component from "../utils/component"
import Countdown from 'react-countdown';
import config from "../config";
//import "./qualifiers.css";

const Finished = () => <span className="yearAuthor"> ¡Finalizó! </span>;

class CountDown extends Component {

  render() {
    return <Countdown
      date={this.props.date.toDate()}
    >
      <Finished />
    </Countdown>
  }

}

export default CountDown