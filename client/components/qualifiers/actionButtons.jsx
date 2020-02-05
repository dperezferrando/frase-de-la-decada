import React from 'react';
import Component from "../../utils/component"
import { Button } from "react-bootstrap";
import TroloModal from "./troloModal";
import "./qualifiers.css"

class ActionButtons extends Component {
  state = {
    troloModalOpened: false
  }

 render() {
  return (
    <span> 
      {this.state.troloModalOpened && <TroloModal
        onHide={::this.closeTroloModal}
        show={this.state.troloModalOpened}
        setTroloMode={this.props.setTroloMode}
      />}
      <Button variant="success" className="actionButton" onClick={this.props.vote} disabled={this.props.selected.length < 32 || !this.props.validate()}>VOTAR</Button>
      <Button variant="warning" className="actionButton" onClick={this.props.trolo ? this.props.setTroloMode : ::this.openTroloModal} disabled={this.props.voted}>Me da paja, bro</Button>
    </span>
    )
 }

 openTroloModal() {
  this.setState({ ...this.state, troloModalOpened: true })
 }

 closeTroloModal() {
  this.setState({ ...this.state, troloModalOpened: false})
 }
}

export default ActionButtons;