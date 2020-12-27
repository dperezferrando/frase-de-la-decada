import React from 'react';
import Component from "../../utils/component"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Col, Row, Alert } from "react-bootstrap";
import _ from "lodash";
import moment from "moment";
import PhrasesList from "./phrasesList";
import ActionButtons from "./actionButtons";
import "./qualifiers.css"
import config from "../../config";
import CountDown from "../countdown"

const MIN_FRASE_YEAR = 2;
const MAX_FRASE_AUTHOR = 10;

class PhrasesDragAndDrop extends Component {

  state = {
    showExplanation: true
  }
    
  render() {
    return (
      <span>
        <Row>
          <Col md={12} className="qualifiersDesc">
           { this.state.showExplanation && 
            <Alert variant="light" onClose={::this.hideTutorial} dismissible>
              <b>FRASE DEL AÑO 2020:</b> Tenés que elegir las 8 frases que considerás fueron las mejores del año.
              Esto lo hacés arrastrando las frases de izquierda a derecha <i>(No es casualidad, la derecha funciona)</i>
              <b> EL ORDEN IMPORTA</b> La primera frase tendrá la cantidad maxima de votos, las siguientes valdran menos. Al lado de cada frase te va a salir cuantos votos le estas dando.
              <br />Tu voto MÁXIMO vale: <b>{this.props.user.multiplicator * 8} punto/s</b>
              <br /><b> Good luck, have fun. </b> 
              <b><span className="yearAuthor">LA VOTACIÓN TERMINA EN <CountDown date={config.qualifiers.endDate}/></span></b>
            </Alert>
            }
          </Col>
        </Row>
        <Row >
          <Col md={11}>
            {
              this._shouldBeAbleToVote() && <span>
              <span>
                <b>Frases seleccionadas:</b> <b>{ this.props.selected.length }</b> de 8
              </span>
              <ActionButtons 
                voted={this.props.voted}
                vote={this.props.vote}
                validate={::this.validate}
                selected={this.props.selected}
                setTroloMode={this.props.setTroloMode}
                trolo={this.props.trolo}
                active={this.props.active}
                user={this.props.user}
              />
              {

              }
              </span>
            }
            {
              this.props.voted && !this._qualifiersFinished() && <span>
                <b>Ya votaste!</b> Podés seguir viendo tu elección:
              </span>
            }
            {
              this._qualifiersFinished() && <span>
                <b>La votación terminó!</b>
              </span>
            }
          </Col>
        </Row>
        <DragDropContext onDragEnd={this.props.onDragEnd} onDragStart={this.props.onDragStart}>
          <Row className="justify-content-md-between">
            <Col md={6}>
              <PhrasesList
                id={"phrasesList"}
                items={this.props.items}
                isLoading={this.props.isLoading}
                isDropDisabled={false}
                className={this.props.className}
                dragDisabled={!this.props.active || this.props.voted || (this.props.selected.length + 1) > 8 || this._qualifiersFinished()}
                user={this.props.user}

              />
              </Col>
            <Col md={6}>

              <PhrasesList
                id={"selectedPhrasesList"}
                items={this.props.selected}
                isDropDisabled={this.props.disableDrop}
                className={this.props.className}
                dragDisabled={!this.props.active || this.props.voted || this._qualifiersFinished()}
                user={this.props.user}
              />
            </Col>
          </Row>
        </DragDropContext>
      </span>
    );
  }
  validate() {
    return true;//this.validateByAnio() && this.validateByAutor();
  }

  validateByAnio() {
    return this._countByAnio()
      .values()
      .every(it => it >= MIN_FRASE_YEAR);
  }

  validateByAutor() {
    return this._countByAutor()
      .values()
      .every(it => it <= MAX_FRASE_AUTHOR);
  }


  aniosFaltantes() {
    return this._countByAnio()
      .map((count, anio) => ({ anio, count }))
      .filter(({ count }) => count < MIN_FRASE_YEAR)
      .map("anio")
      .join(", ")
  }

  _countByAnio() {
    return _(this.props.selected)
      .countBy("anio")
  }

  _countByAutor() {
    return _(this.props.selected)
      .countBy("autor")
  }

  _shouldBeAbleToVote() {
    return !this.props.voted && !this._qualifiersFinished();
  }

  _qualifiersFinished() {
    return moment().isAfter(config.qualifiers.endDate);
  }

  hideTutorial() {
    this.setState({ ...this.state, showExplanation: false })
  }
}

export default PhrasesDragAndDrop;