import React from 'react';
import Component from '../../utils/component';
import { Spinner } from "react-bootstrap";
import './cloak.css';

class Cloak extends Component {
  render() {
    return (
      <div>
        <div className="cloak">
          <Spinner animation="border" variant="danger" className="spinner" />
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Cloak;
