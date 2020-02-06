import React from 'react';
import Component from "../../utils/component"
import Countdown from 'react-countdown';
import config from "../../config";
import "./qualifiers.css";

const Finished = () => <span className="yearAuthor"> Finalizo! </span>;

class CountDown extends Component {

  render() {
    return <Countdown
      date={config.qualifiers.endDate.toDate()}
    >
      <Finished />
    </Countdown>
  }

}

export default CountDown