import React from 'react';
import Component from "../../utils/component"
import { Button } from "react-bootstrap";
import TroloModal from "./troloModal";
import ConfirmationModal from "./confirmationModal";
import "./qualifiers.css"

const CANT_FRASES = 7

class ActionButtons extends Component {
  state = {
    troloModalOpened: false,
    confirmationModalOpened: false,
  }

 render() {
  return (
    <span> 
      {this.state.troloModalOpened && <TroloModal
        onHide={::this.closeTroloModal}
        show={this.state.troloModalOpened}
        setTroloMode={this.props.setTroloMode}
        user={this.props.user}
      />}
      {this.state.confirmationModalOpened && <ConfirmationModal
        onHide={::this.closeConfirmationModal}
        show={this.state.confirmationModalOpened}
        vote={this.props.vote}
      />}
      <Button variant="success" className="actionButton" onClick={::this.openConfirmationModal} disabled={this.props.selected.length < CANT_FRASES || !this.props.validate() || !this.props.active}>VOTAR</Button>
      {!this.props.active && <span className="actionButton">Tu usuario <b>NO</b> está <b>ACTIVO</b>. No podés votar.</span>}
    </span>
    )
 }

 openTroloModal() {
  this.setState({ ...this.state, troloModalOpened: true })
 }

 closeTroloModal() {
  this.setState({ ...this.state, troloModalOpened: false})
 }

 openConfirmationModal() {
  this.setState({ ...this.state, confirmationModalOpened: true })
 }

 closeConfirmationModal() {
  this.setState({ ...this.state, confirmationModalOpened: false })
 }


}

export default ActionButtons;