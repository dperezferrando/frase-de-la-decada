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

const MIN_FRASE_YEAR = 3;
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
              <b>ELIMINATORIAS:</b> Tenes que elegir las 27 frases que consideras deben participar
              en la competicion para convertirse en la <b>Frase de la Decada</b> (Las frases ganadroas de cada año ya estan clasificadas). Esto lo haces arrastrando las frases de 
              izquierda a derecha <i>(No es casualidad, la derecha funciona)</i>
              <b> Hay dos restricciones</b>: minimo tiene que haber <b>{MIN_FRASE_YEAR}</b> frases de cada año y maximo <b>{MAX_FRASE_AUTHOR}</b> frases de un autor en particular. (Contando siempre a las frases ya clasificadas)
              Si te da <b>PAJA</b> hay un boton para eso.
              <b> Good luck, have fun. </b> 
              <b><span className="yearAuthor">ESTA FASE TERMINA EN <CountDown date={config.qualifiers.endDate}/></span></b>
            </Alert>
            }
          </Col>
        </Row>
        <Row >
          <Col md={11}>
            {
              this._shouldBeAbleToVote() && <span>
              <span>
                <b>Frases seleccionadas:</b> <b>{ this.props.selected.length }</b> de 32
              </span>
              <ActionButtons 
                voted={this.props.voted}
                vote={this.props.vote}
                validate={::this.validate}
                selected={this.props.selected}
                setTroloMode={this.props.setTroloMode}
                trolo={this.props.trolo}
                active={this.props.active}
              />
              {
                !this.validate() && <div>
                <b>Te faltan frases de los años:</b> { this.aniosFaltantes() }

              </div>
              }
              </span>
            }
            {
              this.props.voted && !this._qualifiersFinished() && <span>
                <b>Ya votaste en esta fase!</b> Podes seguir viendo tu eleccion:
              </span>
            }
            {
              this._qualifiersFinished() && <span>
                <b>Esta fase ya termino!</b>
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
                dragDisabled={this.props.voted || this._qualifiersFinished()}
              />
              </Col>
            <Col md={6}>

              <PhrasesList
                id={"selectedPhrasesList"}
                items={this.props.selected}
                isDropDisabled={this.props.disableDrop || this.props.selected.length >= 32 }
                className={this.props.className}
                dragDisabled={this.props.voted || this._qualifiersFinished()}
              />
            </Col>
          </Row>
        </DragDropContext>
      </span>
    );
  }
  validate() {
    return this._countByAnio()
      .values()
      .every(it => it >= MIN_FRASE_YEAR);
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